/**
 * @fileOverview unit test task
 */

import gulp from 'gulp';
import { Server as Karma } from 'karma';
import config from '../config';

gulp.task('unit', done => {
  var karma = new Karma({
    configFile: config.test.karma,
    singleRun: true
  }, done);
  karma.start();
});
