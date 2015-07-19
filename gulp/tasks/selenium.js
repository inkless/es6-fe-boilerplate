/**
 * @fileOverview install and run selenium
 */

import gulp from 'gulp';
import selenium from 'selenium-standalone';
import config from '../config';

gulp.task('selenium', done => {
  selenium.install({
    logger: function(message) {}
  }, err => {
    if (err) return done(err);

    selenium.start((err, child) => {
      if (err) return done(err);
      // save it to selenium, then we can kill it later
      selenium.child = child;
      done();
    });
  })
});
