/**
 * @fileOverview handle all errors
 */

import notify from 'gulp-notify';
import config, {env} from '../config';

export default function(error) {

  if (config.production) {
    // Log the error and stop the process
    // to prevent broken code from building
    console.log(error);
    process.exit(1);

  } else {
    let args = Array.prototype.slice.call(arguments);

    // Send error to notification center with gulp-notify
    notify.onError({
      title: 'Compile Error',
      message: '<%= error.message %>'
    }).apply(this, args);

    // Keep gulp from hanging on this task
    this.emit('end');
  }

};