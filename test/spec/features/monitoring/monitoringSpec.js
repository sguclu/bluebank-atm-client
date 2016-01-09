/*jshint unused: vars */
define([
  'angular',
  'angular-mocks',
  'app'
], function (angular, mocks, app) {
  'use strict';

  describe('Controller: MonitoringCtrl', function () {

    // load the controller's module
    beforeEach(module('bluebankAtmClientApp.controllers.MonitoringCtrl'));

    var MonitoringCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      var $scope = $rootScope.$new();
      MonitoringCtrl = $controller('MonitoringCtrl', {
        $scope: $scope,
        healthcheck: {
          monitoring: function () {
          }
        }
      });
    }));

    it('should be defined', function () {
      expect(MonitoringCtrl).toBeDefined();
    });
  });
});
