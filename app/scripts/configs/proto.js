define([
  'angular'
], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name bluebankAtmClientApp.protoConfig
   * @description
   * # protoConfig
   * Constant in the bluebankAtmClientApp.
   */
  angular.module('bluebankAtmClientApp.services.ProtoConfig', [])
    .constant('protoConfig', {
      atm: {
        fileName: 'atm.proto',
        modelName: 'Atm',
        packageName: 'org.bluebank.contract'
      }
    });
});
