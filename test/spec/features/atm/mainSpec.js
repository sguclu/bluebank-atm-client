/*jshint unused: vars */
define([
  'angular',
  'angular-mocks',
  'app'
], function (angular, mocks, app) {
  'use strict';

  describe('Controller: MainCtrl', function () {

    beforeEach(module('bluebankAtmClientApp.controllers.MainCtrl'));

    // load the controller's module
    beforeEach(function () {
      module(function ($provide) {
        $provide.service('uuid4', function () {
          var uuidMock = {};
          uuidMock.generate = function () {
            return 0;
          };
          return uuidMock;
        });
        $provide.service('underscore', function () {
          var underscore = {};
          return underscore;
        });
        $provide.service('webSocket', function () {
          var webSocket = jasmine.createSpyObj('webSocket', ['connect', 'onEvent']);
          return webSocket;
        });
        $provide.service('atmConfig', function () {
          var atmConfig = {};
          return atmConfig;
        });
      });
    });

    var MainCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, atmConfig) {
      var $scope = $rootScope.$new();

      MainCtrl = $controller('MainCtrl', {
        $scope: $scope,
        atmConfig: atmConfig
      });
    }));

    it('should be defined', function () {
      expect(MainCtrl).toBeDefined();
    });
  });
});
