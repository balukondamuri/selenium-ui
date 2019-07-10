import {BrowserBuilder,} from '../src/browserBuilder';
import {WebDriver,By} from 'selenium-webdriver';
import {login} from './pages/login';
import {expect} from 'chai';

describe("Home Page Test Suite", function(){
    let driver:WebDriver;
    this.timeout(0);
    //let _password:any = password();
    before(async ()=>{
        driver= await new BrowserBuilder().browserBuilder();
    });
    after(async ()=>{
       await driver.quit();
    })
    it("Login to the Home Page ", async function(){
        return await login(driver,"username","pass","url")
                    .then((_:any)=> driver.getTitle())
                    .then(function(title){
                        expect("expectation").equals(title);
                    });
    });














})
