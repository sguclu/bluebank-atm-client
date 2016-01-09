/*jshint unused: vars */
define([
  'angular',
  'angular-mocks',
  'app'
], function (angular, mocks, app) {
  'use strict';

  describe('Service: event', function () {

    // load the service's module
    beforeEach(module('bluebankAtmClientApp.services.event'));

    // instantiate service
    var event;
    beforeEach(inject(function (_event_) {
      event = _event_;
    }));

    it('should be defined', function () {
      expect(!!event).toBe(true);
    });

  });
});
