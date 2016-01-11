define([
  'angular'
], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name bluebankAtmClientApp.account
   * @description
   * # account
   * Factory in the bluebankAtmClientApp.
   */
  angular.module('bluebankAtmClientApp.services.account', [])
    .factory('account', function ($resource) {
      return $resource('http://localhost:8180/accounts/:accountId',
        {accountId: '@accountId'},
        {
          'accounts': {
            method: 'GET',
            url: 'http://localhost:8180/accounts',
            isArray: true
          }
        }
      );
    });
});
