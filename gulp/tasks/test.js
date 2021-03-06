/**
 * @fileOverview test task
 * It will run unit test first then e2e test
 */

import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('test', () => {
  runSequence('build', 'unit', 'e2e');
});
