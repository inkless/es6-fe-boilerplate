/**
 * @fileOverview run browserSync task
 */

import gulp from 'gulp';
import config from '../config';
import runSequence from 'run-sequence';

gulp.task('build', ['clean'], cb => {
  let buildSequence = [
    ['styles', 'images', 'fonts', 'views', 'browserify']
  ];
  if (config.gzip) {
    buildSequence.push('gzip');
  }
  buildSequence.push(cb);

  runSequence.apply(null, buildSequence);
});