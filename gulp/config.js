/**
 * @fileOverview merge config according to environment
 */

import minimist from 'minimist';
import defaultConfig from './env/default';
import devConfig from './env/development';
import testConfig from './env/test';
import prodConfig from './env/production';

const argv = minimist(process.argv.slice(2));
const ENV = {
  DEVELOPMENT: 'development',
  TEST: 'test',
  PRODUCTION: 'production'
};

let env = argv.release ? ENV.PRODUCTION : process.env.NODE_ENV;
let config = defaultConfig;

switch (env) {
  case ENV.DEVELOPMENT:
    Object.assign(config, devConfig);
    break;
  case ENV.TEST:
    Object.assign(config, testConfig);
    break;
  case ENV.PRODUCTION:
    Object.assign(config, prodConfig);
    break;
  default:
    break;
}

export default config;
export { env };