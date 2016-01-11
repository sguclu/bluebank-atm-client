define([
  'angular'
], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name bluebankAtmClientApp.healthcheck
   * @description
   * # healthcheck
   * Factory in the bluebankAtmClientApp.
   */
  angular.module('bluebankAtmClientApp.services.healthcheck', [])
    .factory('healthcheck', function ($resource) {
      return $resource('http://localhost:8180/admin/healthcheck/:healthcheckId',
        {healthcheck: '@healthcheckId'}, {
          'monitoring': {
            method: 'GET',
            url: 'http://localhost:8180/admin/healthcheck'
          }
        }
      );
    });
});
