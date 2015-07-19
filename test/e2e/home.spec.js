/*global browser, by */

'use strict';

module.exports = {
  'Test Homepage': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 500)
      .assert.containsText('h1', 'Hello World')
      .end();
  }
};
