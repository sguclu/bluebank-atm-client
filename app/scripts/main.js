/*jshint unused: vars */
require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    'angular-animate': '../../bower_components/angular-animate/angular-animate',
    'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
    'angular-resource': '../../bower_components/angular-resource/angular-resource',
    'angular-route': '../../bower_components/angular-route/angular-route',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-touch': '../../bower_components/angular-touch/angular-touch',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    path: '../../bower_components/path/path.min',
    Long: '../../bower_components/long/dist/long',
    ByteBuffer: '../../bower_components/bytebuffer/dist/ByteBufferAB',
    protobuf: '../../bower_components/protobuf/dist/ProtoBuf',
    'angular-uuid4': '../../bower_components/angular-uuid4/angular-uuid4',
    underscore: '../../bower_components/underscore/underscore',
    eventEmitter: '../../bower_components/eventEmitter/EventEmitter',
    lodash: '../../bower_components/lodash/lodash',
    'javascript-state-machine': '../../bower_components/javascript-state-machine/state-machine',
    card: '../../bower_components/card/lib/js/card',
    'angular-card': '../../bower_components/angular-card/src/card',
    'angular-virtual-keyboard': '../../bower_components/angular-virtual-keyboard/release/angular-virtual-keyboard.min',
    d3: '../../bower_components/d3/d3',
    'dagre-d3': '../../bower_components/dagre-d3/dist/dagre-d3.core',
    graphlib: '../../bower_components/graphlib/dist/graphlib.core',
    dagre: '../../bower_components/dagre/dist/dagre.core.min',
    'dagre.core': '../../bower_components/dagre/dist/dagre.core.min',
    'angular-bootstrap': '../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
    text: '../../bower_components/text/text'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-route': [
      'angular'
    ],
    'angular-cookies': [
      'angular'
    ],
    'angular-sanitize': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ],
    'angular-animate': [
      'angular'
    ],
    'angular-touch': [
      'angular'
    ],
    'angular-uuid4': [
      'angular'
    ],
    'angular-virtual-keyboard': [
      'angular'
    ],
    'angular-bootstrap': [
      'angular'
    ],
    'angular-card': {
      deps: [
        'card',
        'angular'
      ]
    },
    dagre: {
      deps: [
        'graphlib'
      ]
    },
    'dagre-d3': {
      deps: [
        'lodash',
        'graphlib',
        'dagre',
        'd3'
      ]
    },
    'angular-mocks': {
      deps: [
        'angular'
      ],
      exports: 'angular.mock'
    }
  },
  priority: [
    'angular'
  ],
  packages: [

  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angular-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource',
  'angular-animate',
  'angular-touch',
  'angular-uuid4',
  'angular-card',
  'angular-virtual-keyboard',
  'angular-bootstrap'

], function (angular, app, ngRoutes, ngCookies, ngSanitize, ngResource, ngAnimate, ngTouch) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function () {
    angular.resumeBootstrap([app.name]);
  });
});



