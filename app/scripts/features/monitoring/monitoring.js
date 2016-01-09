define([
  'angular'
], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name bluebankAtmClientApp.controller:MonitoringCtrl
   * @description
   * # MonitoringCtrl
   * Controller of the bluebankAtmClientApp
   */
  angular.module('bluebankAtmClientApp.controllers.MonitoringCtrl', [])
    .controller('MonitoringCtrl', function ($scope, healthcheck) {

      healthcheck.monitoring(function (data) {
        $scope.monitoring = data;
      }, function err(data) {
        $scope.monitoring = data.data;
      });
    });
});
