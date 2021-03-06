Front End Boilerplate
=====================

[![Build Status](https://travis-ci.org/inkless/es6-fe-boilerplate.svg?branch=master)](http://travis-ci.org/inkless/es6-fe-boilderplate)
[![Dependency Status](https://david-dm.org/inkless/es6-fe-boilerplate.svg)](https://david-dm.org/inkless/es6-fe-boilerplate)
[![devDependency Status](https://david-dm.org/inkless/es6-fe-boilerplate/dev-status.svg)](https://david-dm.org/inkless/es6-fe-boilerplate#dev-badge-embed=&info=devDependencies&view=table)

A boilerplate using Gulp, Browserify, Sass and React, etc.

---

### Getting up and running

1. Clone this repo from `https://github.com/inkless/es6-fe-boilderplate`
2. Run `npm install` from the root directory
3. Run `gulp watch` (may require installing Gulp globally `npm install gulp -g`)
4. Your browser will automatically be opened and directed to the browser-sync proxy address
5. To prepare assets for production, run the `gulp build --release` task (Note: the production task does not fire up the express server, and won't provide you with browser-sync's live reloading. Simply use `gulp watch` during development. More information below)

Now that `gulp watch` is running, the server is up as well and serving files from the `/dist` directory. Any changes in the `/src` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.
