/**
 * @fileOverview lint task
 */

import gulp from 'gulp';
import jshint from 'gulp-jshint';
import config from '../config';

gulp.task('lint', () => {
  return gulp.src(config.scripts.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
