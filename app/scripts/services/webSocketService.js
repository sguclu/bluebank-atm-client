define([
  'angular'
], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name bluebankAtmClientApp.websocket
   * @description
   * # Websocket
   * Service in the bluebankAtmClientApp.
   */
  angular.module('bluebankAtmClientApp.services.webSocket', [])
    .service('webSocket', function ($timeout, protoBuf, event, serverConfig) {

      var webSocket = null;

      var events = {
        connected: "connected",
        disconnected: "disconnected"
      };

      function emit(event, data) {
        var payload = protoBuf.encode(event, data);
        webSocket.send(JSON.stringify({event: event, data: payload}));
      }

      function connect() {
        webSocket = new WebSocket(serverConfig.serverAddress);

        webSocket.onopen = function () {
          console.debug("Connected to the server");
          event.emitEvent(events.connected);
        };

        webSocket.onclose = function () {
          console.debug("Disconnected from the server");
          event.emitEvent(events.disconnected);
          $timeout(function () {
            console.debug('Reconnecting to server...');
            connect();
          }, 3000);
        };

        webSocket.onmessage = function (message) {
          console.debug("Received message from the server");
          var json = JSON.parse(message.data);
          event.emitEvent(json.event, [protoBuf.decode(json.event, json.data)]);
        };
      }

      function onConnected(handler) {
        event.addListener(events.connected, handler);
      }

      function onDisconnected(handler) {
        event.addListener(events.disconnected, handler);
      }

      function onEvent(eventType, handler) {
        event.addListener(eventType, handler);
      }

      return {
        onEvent: onEvent,
        onConnected: onConnected,
        onDisconnected: onDisconnected,
        emit: emit,
        connect: connect
      };

    });
});
