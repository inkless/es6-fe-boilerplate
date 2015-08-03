/**
 * @fileOverview lint task
 */

import gulp from 'gulp';
import eslint from 'gulp-eslint';
import config from '../config';

gulp.task('lint', () => {
  return gulp.src(config.scripts.src)
    .pipe(eslint())
    .pipe(eslint.format());
});
