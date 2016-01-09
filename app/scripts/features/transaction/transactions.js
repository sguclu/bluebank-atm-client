define([
  'angular'
], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name bluebankAtmClientApp.controller:TransactionsCtrl
   * @description
   * # TransactionsCtrl
   * Controller of the bluebankAtmClientApp
   */
  angular.module('bluebankAtmClientApp.controllers.TransactionsCtrl', [])
    .controller('TransactionsCtrl', function ($scope, transaction) {

      transaction.sessions(function (data) {
        $scope.sessions = data;
      });

    });
});
