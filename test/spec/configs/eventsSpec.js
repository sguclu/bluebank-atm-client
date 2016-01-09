/*jshint unused: vars */
define([
  'angular',
  'angular-mocks',
  'app'
], function (angular, mocks, app) {
  'use strict';

  describe('Service: eventsConfig', function () {

    // load the service's module
    beforeEach(module('bluebankAtmClientApp.configs.EventsConfig'));

    // instantiate service
    var eventsConfig;
    beforeEach(inject(function (_eventsConfig_) {
      eventsConfig = _eventsConfig_;
    }));

    it('should be defined', function () {
      expect(!!eventsConfig).toBe(true);
    });

  });
});
