/*jshint unused: vars */
define([
  'angular',
  'angular-mocks',
  'app'
], function (angular, mocks, app) {
  'use strict';

  describe('Service: serverConfig', function () {

    // load the service's module
    beforeEach(module('bluebankAtmClientApp.configs.ServerConfig'));

    // instantiate service
    var serverConfig;
    beforeEach(inject(function (_serverConfig_) {
      serverConfig = _serverConfig_;
    }));

    it('should be defined', function () {
      expect(!!serverConfig).toBe(true);
    });

  });
});
