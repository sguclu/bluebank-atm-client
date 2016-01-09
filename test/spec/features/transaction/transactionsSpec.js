/*jshint unused: vars */
define([
  'angular',
  'angular-mocks',
  'app'
], function (angular, mocks, app) {
  'use strict';

  describe('Controller: TransactionsCtrl', function () {

    // load the controller's module
    beforeEach(module('bluebankAtmClientApp.controllers.TransactionsCtrl'));

    var TransactionsCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      var $scope = $rootScope.$new();
      TransactionsCtrl = $controller('TransactionsCtrl', {
        $scope: $scope,
        transaction: {
          sessions: function () {
          }
        }
      });
    }));

    it('should be defined', function () {
      expect(TransactionsCtrl).toBeDefined();
    });

  });
});
