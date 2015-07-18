/**
 * @fileOverview include all gulp files here
 */

import fs from 'fs';
import bulk from 'bulk-require';

bulk(__dirname + '/tasks', ['*.js']);