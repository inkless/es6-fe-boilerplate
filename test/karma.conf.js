'use strict';

var istanbul = require('browserify-istanbul');
var isparta  = require('isparta');

module.exports = function(config) {

  var configurations = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify', 'source-map-support'],

    // list of files / patterns to load in the browser
    files: [
      'test/unit/**/*.spec.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/scripts/**/*.js': ['browserify', 'coverage'],
      'src/scripts/**/*.jsx': ['browserify', 'coverage'],
      'test/**/*spec.js': ['browserify']
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    browserify: {
      debug: true,
      transform: [
        ['babelify', {ignore: ['**/src/vendor/**']}],
        'debowerify',
        'bulkify',
        istanbul({
          instrumenter: isparta,
          ignore: ['**/node_modules/**', '**/test/**', '**/src/vendor/**']
        })
      ],
      paths: ['./src/scripts']
    },

    proxies: {
      '/web': 'http://localhost:3000'
    },

    coverageReporter: {
      type: 'text',
      dir: 'coverage',
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        { type: 'text', subdir: '.', file: 'report.txt' },
        { type: 'text-summary', subdir: '.', file: 'report-summary.txt' }
      ]
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // special config for travis
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }

  };

  if (process.env.TRAVIS) {
    configurations.browsers = ['Chrome_travis_ci'];
  }

  config.set(configurations);

};
