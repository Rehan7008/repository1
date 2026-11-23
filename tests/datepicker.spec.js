const { test, expect } = require("@playwright/test");

test('Date Picker', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.locator('#datepicker').click();
    await page.locator('#datepicker').fill('02/10/2026');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    await page.locator('#txtDate').click();
    await page.locator('#txtDate').fill('22/10/2026');
    await page.keyboard.press('Enter');

})