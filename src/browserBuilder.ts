import * as chrome from 'selenium-webdriver/chrome';
import * as firefox from 'selenium-webdriver/firefox'
import { Builder, WebDriver } from 'selenium-webdriver';
import {BROWSER_DETAILS} from './constants';
require('geckodriver');
require('chromedriver');

export class BrowserBuilder{

     public browserBuilder():WebDriver{
        switch(BROWSER_DETAILS.browser_name){
            case 'chrome':
               return new Builder().forBrowser(BROWSER_DETAILS.browser_name)
                                    .setChromeOptions(new chrome.Options().headless()).build(); 
               break;
            case 'firefox':
               return new Builder().forBrowser(BROWSER_DETAILS.browser_name).build();
               break;  
            default:
               return new Builder().forBrowser('chrome').build();
        }
     }
}
