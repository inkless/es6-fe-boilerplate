/**
 * @fileOverview prod config file
 */

export default {

  'scripts': {
    'uglify': true
  },
  
  'styles': {
    'sass': {
      'sourceComments': false,
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
  }

};