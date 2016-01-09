// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine', "requirejs"],

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'bower_components/angular/angular.js', included: false },
      {pattern: 'bower_components/angular-mocks/angular-mocks.js', included: false },
      {pattern: 'bower_components/angular-animate/angular-animate.js', included: false },
      {pattern: 'bower_components/angular-cookies/angular-cookies.js', included: false },
      {pattern: 'bower_components/angular-resource/angular-resource.js', included: false },
      {pattern: 'bower_components/angular-route/angular-route.js', included: false },
      {pattern: 'bower_components/angular-sanitize/angular-sanitize.js', included: false },
      {pattern: 'bower_components/angular-touch/angular-touch.js', included: false },
      {pattern: 'bower_components/path/path.min.js', included: false },
      {pattern: 'bower_components/long/dist/long.js', included: false },
      {pattern: 'bower_components/bytebuffer/dist/ByteBufferAB.js', included: false },
      {pattern: 'bower_components/protobuf/dist/ProtoBuf.js', included: false },
      {pattern: 'bower_components/underscore/underscore.js', included: false },
      {pattern: 'bower_components/lodash/lodash.js', included: false },
      {pattern: 'bower_components/javascript-state-machine/state-machine.js', included: false },
      {pattern: 'bower_components/eventEmitter/EventEmitter.js', included: false },
      {pattern: 'app/scripts/*.js', included: false },
      {pattern: 'app/scripts/**/*.js', included: false },
      {pattern: 'test/spec/**/*.js', included: false },
      // http://karma-runner.github.io/0.10/plus/requirejs.html
      {pattern: 'bower_components/d3/d3.js', included: false },
      {pattern: 'bower_components/graphlib/dist/graphlib.core.js', included: false },
      {pattern: 'bower_components/dagre/dist/dagre.core.min.js', included: false },
      {pattern: 'bower_components/dagre-d3/dist/dagre-d3.core.js', included: false },
      {pattern: 'bower_components/text/text.js', included: false },
      {pattern: 'app/views/**/*.html', included: false },
      'test/test-main.js'
    ],

    // list of files / patterns to exclude
    exclude: [
        'app/scripts/main.js'
    ],

    colors: true,

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
