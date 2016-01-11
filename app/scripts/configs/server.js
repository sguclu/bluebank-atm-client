define([
  'angular'
], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name bluebankAtmClientApp.serverConfig
   * @description
   * # serverconfig
   * Constant in the bluebankAtmClientApp.
   */
  angular.module('bluebankAtmClientApp.configs.ServerConfig', [])
    .constant('serverConfig', {
      serverAddress: 'ws://localhost:8180/events'
    });
});
