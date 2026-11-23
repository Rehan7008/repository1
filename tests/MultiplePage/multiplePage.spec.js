const { test, expect, chromium } = require("@playwright/test");

test.skip('Handling Multiple Pages', async({page}) => {

    const browser = await chromium.launch({headless : false});
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPage = context.pages();
    console.log("No Of Pages created:", allPage.length);
    
    await page1.goto('https://www.demoblaze.com/');
    await expect(page1).getByTitle('STORE');

    await page2.goto('https://formy-project.herokuapp.com/');
    await expect(page2).getByTitle('Formy');

    await browser.close();

})

test('Handle Multiple Page', async({page}) => {

    const browser = await chromium.launch({headless : false});
    const context = await browser.newContext();
    const page1 = await context.newPage();
    
    await page1.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page1).getByTitle('OrangeHRM');

    const pagePromise = context.waitForEvent('page');

    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    const newPage = await pagePromise;

    await expect(newPage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM');

    await page1.waitForTimeout(3000);

    await browser.close();

})