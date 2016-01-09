define([
  'angular',
  'eventEmitter'
], function (angular, EventEmitter) {
  'use strict';

  /**
   * @ngdoc service
   * @name bluebankAtmClientApp.event
   * @description
   * # Event
   * Service in the bluebankAtmClientApp.
   */
  angular.module('bluebankAtmClientApp.services.event', [])
    .service('event', function ($rootScope) {

      var emitter = new EventEmitter();

      function addListener(event, handler) {
        emitter.addListener(event, function (data) {
          console.debug(data);
          handler.apply(this, arguments);
          $rootScope.$digest();
          $rootScope.$apply();
        });
      }

      function emitEvent(event, data) {
        console.debug(event);
        console.debug(data);
        emitter.emitEvent.apply(emitter, arguments);
      }

      return {
        addListener: addListener,
        emitEvent: emitEvent
      };
    });
});
