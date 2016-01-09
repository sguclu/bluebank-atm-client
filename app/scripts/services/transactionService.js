define([
  'angular'
], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name bluebankAtmClientApp.transaction
   * @description
   * # transaction
   * Factory in the bluebankAtmClientApp.
   */
  angular.module('bluebankAtmClientApp.services.transaction', [])
    .factory('transaction', function ($resource) {
      return $resource('http://localhost:8080/transactions/:transactionId',
        {transactionId: '@transactionId'}, {
          'sessions': {
            method: 'GET',
            url: 'http://localhost:8080/transactions',
            isArray: true
          }
        }
      );
    });
});
