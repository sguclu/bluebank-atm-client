/*jshint unused: vars */
define([
  'angular',
  'angular-mocks',
  'app'
], function (angular, mocks, app) {
  'use strict';

  describe('Service: protoConfig', function () {

    // load the service's module
    beforeEach(module('bluebankAtmClientApp.services.ProtoConfig'));

    // instantiate service
    var protoConfig;
    beforeEach(inject(function (_protoConfig_) {
      protoConfig = _protoConfig_;
    }));

    it('should be defined', function () {
      expect(!!protoConfig).toBe(true);
    });

  });
});
