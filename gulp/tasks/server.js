/**
 * @fileOverview start server
 *
 * In real project, usually we'll have a sperate server.
 * You may either make this file as a trivial task,
 * or just remove it from other tasks
 */

import http from 'http';
import express from 'express';
import gulp from 'gulp';
import gutil from 'gulp-util';
import morgan from 'morgan';
import config from '../config';

gulp.task('server', ['build'], () => {

  let app = express();

  // log all requests to the console
  app.use(morgan('dev'));
  app.use(express.static(config.dist.root));

  // Serve index.html, front end will handle the routing
  app.all('/*', (req, res) => {
      res.sendFile('index.html', { root: config.dist.root });
  });

  app.listen(config.serverport, () => {
    gutil.log('Development server is already started at port %s', config.serverport);
  });

});
