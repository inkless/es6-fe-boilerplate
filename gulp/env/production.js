/**
 * @fileOverview prod config file
 */

export default {

  'scripts': {
    'uglify': true
  },
  
  'styles': {
    'sass': {
      'sourceComments': 'none',
      'outputStyle': 'compressed'
    }
  },

  'images': {
    'imagemin': true
  },

  'gzip': {
    'src': 'dist/**/*.{html,xml,json,css,js,js.map}',
    'dest': 'dist/',
    'options': {}
  },
  
  'browserify': {
    'sourcemap': false
  }

};