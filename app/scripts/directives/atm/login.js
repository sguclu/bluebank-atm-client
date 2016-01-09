define([
  'angular',
  'text!../../../views/templates/atm/login.html'
], function (angular, loginTemplate) {
  'use strict';

  /**
   * @ngdoc directive
   * @name bluebankAtmClientApp.directive:login
   * @description
   * # login
   */
  angular.module('bluebankAtmClientApp.directives.Login', [])
    .directive('login', function () {
      return {
        template: loginTemplate,
        restrict: 'E',
        scope: {
          state: '='
        },
        link: function (scope) {
          scope.validatePin = function () {
            scope.state.pinEntered(scope.pin);
          };
        }
      };
    });
});
