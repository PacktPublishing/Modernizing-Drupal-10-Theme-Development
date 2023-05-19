module.exports = {
  '@tags': ['alps_trips'],
  'Home page': (browser) => {
    browser
      .drupalRelativeURL('/')
      .waitForElementVisible('body', 1000)
      .assert.textContains('body', 'Popular trips')
      .drupalLogAndEnd({ onlyOnError: false });
  },
};
