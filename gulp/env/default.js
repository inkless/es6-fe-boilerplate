/**
 * @fileOverview default config file
 */

export default {

  'serverport': 3000,

  'styles': {
    'src' : 'src/styles/**/*.scss',
    'dest': 'dist/css',
    'sass': {
      'sourceComments': true,
      'sourceMap': 'sass',
      'outputStyle': 'nested'
    }
  },

  'scripts': {
    'src' : 'src/scripts/**/*.js',
    'dest': 'dist/js',
    'uglify': false
  },

  'images': {
    'src' : 'src/images/**/*',
    'dest': 'dist/images',
    'imagemin': false
  },

  'fonts': {
    'src' : ['src/fonts/**/*'],
    'dest': 'dist/fonts'
  },

  'views': {
    'entry': 'src/index.html',
    'watch': [
      'src/index.html',
      'src/views/**/*.html'
    ],
    'src': 'src/views/**/*.html',
    'dest': 'src/js'
  },

  'dist': {
    'root'  : 'dist'
  },

  'browserify': {
    'entries'   : ['./src/scripts/bootstrap.js'],
    'bundleName': 'main.js',
    'sourceMap' : true,
    'config': {
      'debug': true,
      'fullPaths': true,
      'paths': ['./src/scripts']
    }
  },

  'uglify': {
    'compress': {
      'drop_console': true
    }
  },

  'test': {
    'karma': __dirname + '/../../test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};
