/**
 * @fileOverview styles task
 */

import gulp from 'gulp';
import sass from 'gulp-sass';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import handleErrors from '../util/handleErrors';
import browserSync from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import config from '../config';

gulp.task('styles', () => {
  return gulp.src(config.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.styles.sass))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.styles.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({
      stream: true
    })));
});