const puppeteer = require('puppeteer');

async function test(){
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });
    
    const page = await browser.newPage();
    //Registrarse
     await page.goto('https://angular-6-registration-login-example.stackblitz.io/register', { waitUntil: "networkidle0" });
     await page.waitFor(5000);
     await page.type('input[ng-reflect-name="firstName"]',"Andres");
     await page.type('input[ng-reflect-name="lastName"]',"Rodriguez");
     await page.type('input[ng-reflect-name="username"]',"usuario100");    
     await page.type('input[ng-reflect-name="password"]',"pruebas");
     await page.click('.btn-primary');
     await page.waitFor(5000);
     //Login
     await page.type('input[ng-reflect-name="username"]',"usuario100");    
     await page.type('input[ng-reflect-name="password"]',"pruebas");
     await page.click('.btn-primary');
     await page.waitFor(5000);
     //Logout
     await page.click('a[ng-reflect-router-link="/login"]');
     await page.waitFor(2000);
     //Delete
     await page.waitFor(5000);
     await page.type('input[ng-reflect-name="username"]',"usuario100");    
     await page.type('input[ng-reflect-name="password"]',"pruebas");
     await page.click('.btn-primary');
     await page.waitFor(5000);
     await page.click('.text-danger');
     browser.close();
}

test();
