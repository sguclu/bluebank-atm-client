/*jshint unused: vars */
define([
  'angular',
  'angular-mocks',
  'app'
], function (angular, mocks, app) {
  'use strict';

  describe('Service: webSocket', function () {

    var service;

    beforeEach(module('bluebankAtmClientApp.services.webSocket'));

    // load the service's module
    beforeEach(function () {
      module(function ($provide) {
        $provide.service('protoBuf', function () {
          var protoBuf = {};
          return protoBuf;
        });
        $provide.service('event', function () {
          var event = jasmine.createSpyObj('event', ['emitter']);
          return event;
        });
        $provide.service('messagesConfig', function () {
          var messagesConfig = {};
          return messagesConfig;
        });
        $provide.service('serverConfig', function () {
          var serverConfig = {};
          return serverConfig;
        });
      });
      inject(function ($injector) {
        service = $injector.get('webSocket');
      });
    });

    it('should be defined', function () {
      expect(!!service).toBe(true);
    });

  });
});
