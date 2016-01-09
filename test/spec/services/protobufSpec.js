/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function (angular, mocks, app) {
  'use strict';

  describe('Service: protoBuf', function () {

    var service, protoBuf;

    beforeEach(module('bluebankAtmClientApp.services.protoBuf'));

    // load the service's module
    beforeEach(function () {
      protoBuf = jasmine.createSpyObj('protoBuf', ['loadProtoFile']);
      module(function ($provide) {
        $provide.service('protoConfig', function () {
          return {atm: {fileName: 'atm.proto'}};
        });

        $provide.service('eventsConfig', function () {
          var eventsConfig = {};
          return eventsConfig;
        });
      });
      inject(function ($injector) {
        service = $injector.get('protoBuf');
      });
    });

    it('should be defined', function () {
      expect(!!service).toBe(true);
    });
  });
});
