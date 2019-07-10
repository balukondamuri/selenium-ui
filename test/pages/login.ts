import { By } from "selenium-webdriver";
import { strict } from "assert";


/** export function password(){

   let _secretKey="encripted";
   let simpleCrypto = new SimpleCrypto(_secretKey);
   let decryptPassword= simpleCrypto.decrypt("31769efe4a2e8aa1565da4416c9024d64fca1dbb6e2165e7b2e20c1a5eaa6bccPqrVFTJVk6dIc7Spd5UKtg==");
   console.log("decipted password "+ decryptPassword);
   return decryptPassword;

}
*/

export async function login(driver:any,userName:string,password:string,url:string){
   return await driver.get(url)
                    .then((u:any)=> driver.findElement(By.xpath(`//*[@id='username']`)))
                    .then((_:any)=> _.sendKeys(userName))
                    .then((p:any)=> driver.findElement(By.xpath(`//*[@id='password']`)))
                    .then((_:any)=> _.sendKeys(password))
                    .then((c:any)=> driver.findElement(By.xpath(`//*[@type='submit']`)))
                    .then((_:any)=> _.click());
}


