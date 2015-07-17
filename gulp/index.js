/**
 * @fileOverview include all gulp files here
 */

import fs from 'fs';
import requireAll from 'require-all';

requireAll({
  dirname: __dirname + '/tasks',
  // Filters out non .js files. Prevents
  // accidental inclusion of possible hidden files
  filter: /(\.(js)$)/
});