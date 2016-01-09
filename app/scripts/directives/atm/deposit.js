define([
  'angular',
  'text!../../../views/templates/atm/amounts.html'
], function (angular, amountsTemplate) {
  'use strict';

  /**
   * @ngdoc directive
   * @name bluebankAtmClientApp.directive:deposit
   * @description
   * # deposit
   */
  angular.module('bluebankAtmClientApp.directives.Deposit', [])
    .directive('deposit', function (atmConfig) {
      return {
        template: amountsTemplate,
        restrict: 'E',
        scope: {
          state: '='
        },
        link: function (scope) {
          scope.amounts = atmConfig.atm.amounts;
          scope.deposit = function (amount) {
            scope.state.amountSelected(amount);
          };
        }
      };
    });
});
