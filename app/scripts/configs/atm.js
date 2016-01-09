define([
  'angular'
], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name bluebankAtmClientApp.atmConfig
   * @description
   * # atmConfig
   * Constant in the bluebankAtmClientApp.
   */
  angular.module('bluebankAtmClientApp.configs.AtmConfig', [])
    .constant('atmConfig', {
      atm: {
        id: '1',
        location: '100 Main Street, NewYork 12345,USA',
        bankName: 'Blue Bank International',
        amounts: [20, 40, 60, 80]
      }
    });
});
