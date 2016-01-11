define([
  'angular',
  'text!../../../views/templates/atm/transaction.html'
], function (angular, transactionTemplate) {
  'use strict';

  /**
   * @ngdoc directive
   * @name bluebankAtmClientApp.directive:transaction
   * @description
   * # transaction
   */
  angular.module('bluebankAtmClientApp.directives.Transaction', [])
    .directive('transaction', function () {
      return {
        template: transactionTemplate,
        restrict: 'E',
        scope: {
          state: '='
        },
        link: function (scope) {
          scope.deposit = function () {
            scope.state.depositSelected();
          };

          scope.inquiry = function () {
            scope.state.inquirySelected();
          };

          scope.withdraw = function () {
            scope.state.withdrawSelected();
          };
        }
      };
    });
});
