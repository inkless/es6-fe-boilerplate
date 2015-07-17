/**
 * @fileOverview views task
 */

import gulp from 'gulp';
import htmlreplace from 'gulp-html-replace';
import config from '../config';

// Views task
gulp.task('views', () => {
  // Put our index.html in the dist folder
  gulp.src(config.views.entry)
    .pipe(htmlreplace({
      css: '/css/main.css',
      js: '/js/main.js'
    }))
    .pipe(gulp.dest(config.dist.root));

  // Process any other view files from app/views
  // return gulp.src(config.views.src)
  //   .pipe(gulp.dest(config.views.dest));
});