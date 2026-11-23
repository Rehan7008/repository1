const { test,expect } = require("@playwright/test");
const { testData } = require("../TestData/testData");

test(" External test data reading ", async ({ page }) => {
    
   await page.goto("https://www.saucedemo.com/");

   await page.locator('#user-name').fill(testData.login.invalidUserName);

   await page.locator('#password').fill(testData.login.validPassword);

   await page.locator('#login-button').click();

    const error = page.locator("[data-test='error']");
    console.log(await error.textContent());
    await expect(error).toContainText("Epic sadface");
    await expect(error).toHaveText("Epic sadface: Username and password do not match any user in this service");

    await page.locator('#user-name').fill(testData.login.validuserName);
    await page.locator('#password').fill(testData.login.validPassword);
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory/);

})