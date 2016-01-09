define([
  'angular'
], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name bluebankAtmClientApp.controller:AccountCtrl
   * @description
   * # AccountCtrl
   * Controller of the bluebankAtmClientApp
   */
  angular.module('bluebankAtmClientApp.controllers.AccountCtrl', [])
    .controller('AccountCtrl', function ($scope, account) {

      account.accounts(function (data) {
        $scope.accounts = data;
      });
    });
});
