/*jshint unused: vars */
define([
  'angular',
  'angular-mocks',
  'app'
], function (angular, mocks, app) {
  'use strict';

  describe('Controller: AccountCtrl', function () {

    // load the controller's module
    beforeEach(module('bluebankAtmClientApp.controllers.AccountCtrl'));

    var AccountCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      var $scope = $rootScope.$new();
      AccountCtrl = $controller('AccountCtrl', {
        $scope: $scope,
        account: {
          accounts: function () {
          }
        }
      });
    }));

    it('should be defined', function () {
      expect(AccountCtrl).toBeDefined();
    });
  });
});
