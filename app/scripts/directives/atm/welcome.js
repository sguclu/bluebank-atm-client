define([
  'angular',
  'text!../../../views/templates/atm/welcome.html'
], function (angular, welcomeTemplate) {
  'use strict';

  /**
   * @ngdoc directive
   * @name bluebankAtmClientApp.directive:welcome
   * @description
   * # welcome
   */
  angular.module('bluebankAtmClientApp.directives.Welcome', [])
    .directive('welcome', function () {
      return {
        template: welcomeTemplate,
        restrict: 'E',
        scope: {
          state: '='
        },
        link: function (scope) {
          scope.readCard = function () {
            scope.state.cardInserted();
          };
        }
      };
    });
});
