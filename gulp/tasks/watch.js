/**
 * @fileOverview build and then watch file changes
 *
 * This task only works for non-prod env
 */

import gulp from 'gulp';
import runSequence from 'run-sequence';
import config, {env} from '../config';

gulp.task('watch', () => {
  // we need to change config.watch to true to make browserify work correctly
  config.watch = true;

  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  function watch() {
    gulp.watch(config.scripts.src, ['lint']);
    gulp.watch(config.styles.src, ['styles']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.fonts.src, ['fonts']);
    gulp.watch(config.views.watch, ['views']);
  }

  runSequence(
    'server',
    'browserSync',
    watch
  );

});