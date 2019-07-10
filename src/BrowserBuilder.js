"use strict";
exports.__esModule = true;
var chrome = require("selenium-webdriver/chrome");
var selenium_webdriver_1 = require("selenium-webdriver");
var constants_1 = require("./constants");
require('geckodriver');
require('chromedriver');
var BrowserBuilder = /** @class */ (function () {
    function BrowserBuilder() {
    }
    BrowserBuilder.prototype.browserBuilder = function () {
        switch (constants_1.BROWSER_DETAILS.browser_name) {
            case 'chrome':
                return new selenium_webdriver_1.Builder().forBrowser(constants_1.BROWSER_DETAILS.browser_name)
                    .setChromeOptions(new chrome.Options().headless()).build();
                break;
            case 'firefox':
                return new selenium_webdriver_1.Builder().forBrowser(constants_1.BROWSER_DETAILS.browser_name).build();
                break;
            default:
                return new selenium_webdriver_1.Builder().forBrowser('chrome').build();
        }
    };
    return BrowserBuilder;
}());
exports.BrowserBuilder = BrowserBuilder;
