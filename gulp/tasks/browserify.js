/**
 * @fileOverview browserify task
 * Use browserify to bundle code
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import buffer from 'vinyl-buffer';
import streamify from 'gulp-streamify';
import watchify from 'watchify';
import browserify from 'browserify';
import uglify from 'gulp-uglify';
import handleErrors from '../util/handleErrors';
import browserSync from 'browser-sync';
import config from '../config';

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function fnBundle() {

  let bundler = browserify(config.browserify, config.browserify.config);

  // if we set config.watch in `task watch`
  if (config.watch) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  let transforms = [
    ['babelify', {compact: false, ignore: ['**/src/vendor/**']}],
    'debowerify',
    'brfs',
    'bulkify'
  ];

  transforms.forEach(function(transform) {
    bundler.transform(transform);
  });

  function bundle() {
    let stream = bundler.bundle();
    let createSourceMap = config.browserify.sourceMap;

    gutil.log('Rebundling scripts...');

    return stream.on('error', handleErrors)
      .pipe(source(config.browserify.bundleName))
      .pipe(gulpif(createSourceMap, buffer()))
      .pipe(gulpif(createSourceMap, sourcemaps.init({
        // load separate files
        loadMaps: true
      })))
      .pipe(gulpif(config.scripts.uglify, streamify(uglify(config.uglify))))
      .pipe(gulpif(createSourceMap, sourcemaps.write('./')))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(gulpif(browserSync.active, browserSync.reload({
        stream: true,
        once: true
      })));
  }

  return bundle();

}

gulp.task('browserify', () => fnBundle());