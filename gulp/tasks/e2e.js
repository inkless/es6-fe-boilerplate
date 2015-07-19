/**
 * @fileOverview e2e test task
 * Use nightwatch for our e2e test
 */

import gulp from 'gulp';
import gutil from 'gulp-util';
import selenium from 'selenium-standalone';
import nightwatch from 'gulp-nightwatch';
import config from '../config';

gulp.task('e2e', ['server', 'selenium'], done => {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: config.test.nightwatch
    }))
    // if you want to test both firefox and chrome
    // you can uncomment this
    // .pipe(nightwatch({
    //   configFile: config.test.nightwatch,
    //   cliArgs: [ '--env chrome' ]
    // }))
    .on('end', () => {
      // kill selenium
      gutil.log('killing selenium...');
      selenium.child.kill();
      // has to kill server
      process.exit(0);
    });
});
