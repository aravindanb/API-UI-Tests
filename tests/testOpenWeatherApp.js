/**
 *  Automated test scenario for Nightwatch.js
 *
 * > it navigates to google.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
    '@disabled': false,

    'Load the App' : function (browser) {
        browser
            .url('https://simple-nodejs-weather-app-irhhpddsku.now.sh/')
            .waitForElementPresent('.ghost-button',1000);
    },
    'Enter City and Get Result ' : function(browser) {
        browser
            .setValue('input[type=text]', ['Montreal', browser.Keys.ENTER])
            .pause(1000)
            .assert.containsText('p', 'Montreal')
            .end();
    }
};