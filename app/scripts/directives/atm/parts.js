define([
  'angular',
  'text!../../../views/templates/atm/parts.html'
], function (angular, partsTemplate) {
  'use strict';

  /**
   * @ngdoc directive
   * @name bluebankAtmClientApp.directive:parts
   * @description
   * # parts
   */
  angular.module('bluebankAtmClientApp.directives.Parts', [])
    .directive('parts', function () {
      return {
        template: partsTemplate,
        restrict: 'E',
        link: function (scope) {
          scope.$on('cardInserted', function () {
            scope.cardInserted = true;
            scope.cardEjected = false;
          });

          scope.$on('cardEjected', function () {
            console.debug('cardEjected');
            scope.cardEjected = true;
            scope.cardInserted = false;
            scope.deposited = false;
            scope.withdrawn = false;
          });

          scope.$on('deposited', function () {
            console.debug('deposited');
            scope.deposited = true;
          });

          scope.$on('withdrawn', function () {
            console.debug('withdrawn');
            scope.withdrawn = true;
          });
        }
      };
    });
});

