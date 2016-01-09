define([
  'angular',
  'javascript-state-machine'
], function (angular, stateMachine) {
  'use strict';

  /**
   * @ngdoc function
   * @name bluebankAtmClientApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the bluebankAtmClientApp
   */
  angular.module('bluebankAtmClientApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function (webSocket, $scope, uuid4, $timeout, atmConfig) {
      var transactionId;
      $scope.receipt = [];

      var state = stateMachine.create({
        events: [
          {name: 'started', from: 'none', to: 'cardWaiting'},
          {name: 'cardInserted', from: 'cardWaiting', to: 'cardValidating'},
          {name: 'pinEntered', from: ['cardValidating', 'pinValidating'], to: 'pinValidating'},
          {name: 'pinValidated', from: 'pinValidating', to: 'dispensing'},
          {name: 'depositSelected', from: 'dispensing', to: 'depositing'},
          {name: 'amountSelected', from: 'depositing', to: 'cardEjecting'},
          {name: 'cardEjected', from: 'cardEjecting', to: 'cardWaiting'},
          {name: 'inquirySelected', from: 'dispensing', to: 'inquiring'},
          {name: 'inquired', from: 'inquiring', to: 'cardEjecting'},
          {name: 'wrongPinEntered', from: 'pinValidating', to: 'pinValidating'},
          {name: 'cardRetained', from: 'pinValidating', to: 'cardRetaining'},
          {name: 'close', from: 'cardRetaining', to: 'cardWaiting'}
        ],
        callbacks: {
          oncardEjecting: function () {
            state.cardEjected();
            $timeout(function () {
              $scope.$broadcast('cardEjected');
            });
            return state.ASYNC;
          },
          onstarted: function () {
            startAtm();
          },
          oncardInserted: function () {
            $scope.receipt = [];
            $scope.$broadcast('cardInserted');
            transactionId = uuid4.generate();
            webSocket.emit('VALIDATE_CARD_REQUEST', {
              cardNumber: $scope.card.number.replace(/\s/g, ''),
              transactionId: transactionId,
              id: atmConfig.atm.id,
              location: atmConfig.atm.location,
              bankName: atmConfig.atm.bankName
            });
          },
          onpinEntered: function (event, from, to, pin) {
            webSocket.emit('VALIDATE_PIN_REQUEST', {transactionId: transactionId, pin: pin});
          },
          ondepositing: function(){
            $timeout(function () {
              $scope.$broadcast('deposited');
            });
            return state.ASYNC;
          },

          onbeforeamountSelected: function (event, from, to, amount) {
            webSocket.emit('DEPOSIT_REQUEST', {
              transactionId: transactionId,
              amount: amount
            });
          },
          oninquirySelected: function () {
            webSocket.emit('INQUIRY_REQUEST', {
              transactionId: transactionId
            });
            state.inquired();
          },
          oncardRetained: function () {
            $timeout(function () {
              state.close();
            }, 4000);
          }
        }
      });

      $scope.state = state;

      state.started();

      function startAtm() {

        webSocket.connect();

        webSocket.onEvent('CARD_VALIDATION_STATUS', function (data) {
          var status = {
            'VALIDATED': function () {
              state.pinValidated();
            },
            'WRONG_PIN': function () {
              state.wrongPinEntered();
            },
            'CARD_DISABLED': function () {
              state.cardRetained();
            }
          };
          status[data.status]();
        });

        webSocket.onEvent('RECEIPT', function (message) {
          $scope.receipt.length = 0;

          angular.forEach(message.data, function (value) {
            $scope.receipt.push(value);
          });

        });
      }

      $scope.card = {
        name: 'Mike Brown',
        number: '5555 4444 3333 1111',
        expiry: '11 / 2020',
        cvc: '123'
      };

      $scope.cardOptions = {
        debug: false,
        formatting: true
      };

      $scope.clear = function () {
        $scope.card = {};
      };

      $scope.cardPlaceholders = {
        name: 'Mike Brown',
        number: '5555 4444 3333 1111',
        expiry: '11 / 2020',
        cvc: '123'
      };

      $scope.cardMessages = {
        validDate: 'valid\nthru',
        monthYear: 'MM/YYYY'
      };

    });
});
