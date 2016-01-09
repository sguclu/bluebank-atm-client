define([
  'angular',
  'text!../../../views/templates/atm/printer.html'
], function (angular, printerTemplate) {
  'use strict';

  /**
   * @ngdoc directive
   * @name bluebankAtmClientApp.directive:printer
   * @description
   * # printer
   */
  angular.module('bluebankAtmClientApp.directives.Printer', [])
    .directive('printer', function () {
      return {
        template: printerTemplate,
        restrict: 'E'
      };
    });
});
