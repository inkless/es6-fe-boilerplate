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
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import handleErrors from '../util/handleErrors';
import browserSync from 'browser-sync';
import debowerify from 'debowerify';
import config from '../config';

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function fnBundle() {

  let bundler = browserify(config.browserify, watchify.args);

  // if we set config.watch in `task watch`
  if (config.watch) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  let transforms = [
    babelify,
    debowerify,
    'brfs',
    'bulkify'
  ];

  transforms.forEach(function(transform) {
    bundler.transform(transform);
  });

  function bundle() {
    let stream = bundler.bundle();
    let createSourcemap = config.browserify.sourcemap;

    gutil.log('Rebundling scripts...');

    return stream.on('error', handleErrors)
      .pipe(source(config.browserify.bundleName))
      .pipe(gulpif(createSourcemap, buffer()))
      .pipe(gulpif(createSourcemap, sourcemaps.init()))
      .pipe(gulpif(config.scripts.uglify, uglify, streamify(uglify(config.uglify))))
      .pipe(gulpif(createSourcemap, sourcemaps.write('./')))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(gulpif(browserSync.active, browserSync.reload({
        stream: true,
        once: true
      })));
  }

  return bundle();

}

gulp.task('browserify', () => fnBundle());