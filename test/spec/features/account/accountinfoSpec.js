/*jshint unused: vars */
define([
  'angular',
  'angular-mocks',
  'app'
], function (angular, mocks, app) {
  'use strict';

  describe('Controller: AccountInfoCtrl', function () {

    // load the controller's module
    beforeEach(module('bluebankAtmClientApp.controllers.AccountInfoCtrl'));

    var AccountInfoCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      var $scope = $rootScope.$new();
      AccountInfoCtrl = $controller('AccountInfoCtrl', {
        $scope: $scope,
        account: {
          get: function () {
          }
        },
        $routeParams: {}
      });
    }));

    it('should be defined', function () {
      expect(AccountInfoCtrl).toBeDefined();
    });
  });
});
