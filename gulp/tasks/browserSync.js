/**
 * @fileOverview run browserSync task
 */

import browserSync from 'browser-sync';
import gulp from 'gulp';
import config from '../config';

gulp.task('browserSync', () => {
  browserSync({
    proxy: 'localhost:' + config.serverport
  });
});