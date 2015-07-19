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

  let server = express();

  // log all requests to the console
  server.use(morgan('dev'));
  server.use(express.static(config.dist.root));

  // Serve index.html, front end will handle the routing
  server.all('/*', (req, res) => {
      res.sendFile('index.html', { root: config.dist.root });
  });

  // Start webserver if not already running
  let s = http.createServer(server);
  s.on('error', err => {
    if(err.code === 'EADDRINUSE') {
      gutil.log('Development server is already started at port ' + config.serverport);
    }
    else {
      throw err;
    }
  });

  s.listen(config.serverport);

});
