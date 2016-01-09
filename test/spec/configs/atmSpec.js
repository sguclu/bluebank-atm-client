/*jshint unused: vars */
define([
  'angular',
  'angular-mocks',
  'app'
], function (angular, mocks, app) {
  'use strict';

  describe('Service: atmConfig', function () {

    // load the service's module
    beforeEach(module('bluebankAtmClientApp.configs.AtmConfig'));

    // instantiate service
    var atmConfig;
    beforeEach(inject(function (_atmConfig_) {
      atmConfig = _atmConfig_;
    }));

    it('should be defined', function () {
      expect(!!atmConfig).toBe(true);
    });

  });
});
