/**
 * @fileOverview e2e test task
 * Use protractor for our e2e test
 */

import gulp from 'gulp';
import { protractor, webdriver_standalone, webdriver_update } from 'gulp-protractor';
import config from '../config';

gulp.task('webdriver-update', webdriver_update);
gulp.task('webdriver', webdriver_standalone);

gulp.task('e2e', ['webdriver-update', 'webdriver'], () => {
  return gulp.src('test/e2e/**/*.js')
    .pipe(protractor({
      configFile: config.test.protractor,
    }))
    .on('error', err => {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});