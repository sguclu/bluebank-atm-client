define([
  'angular'
], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name bluebankAtmClientApp.controller:AccountInfoCtrl
   * @description
   * # AccountInfoCtrl
   * Controller of the bluebankAtmClientApp
   */
  angular.module('bluebankAtmClientApp.controllers.AccountInfoCtrl', [])
    .controller('AccountInfoCtrl', function ($scope, account, $routeParams) {

      account.get({accountId: $routeParams.accountId}, function (data) {
        $scope.account = data;
      });
    });
});
