const {test,expect}=require('@playwright/test')
test.skip ('Saucedemo Login', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator("input#user-name").fill('standarduser')
    await page.locator("input#password").fill('secret_sauce')
    await page.locator("input[type='submit']").click();
await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
await page.close()

});

test('Saucedemo screenshot', async({page}) => {

    await page.goto('https://www.saucedemo.com/');
    // await page.locator('xpath = //input[@id="user-name"]').fill('standard_user')
    // await page.locator('xpath = //input[@id="password"]').fill('secret_sauce')
    await expect(page.locator("h3[data-test ='error']")).toBeHidden();
    await page.locator('xpath = //input[@id="login-button"]').click();
    await page.locator("h3[data-test ='error']").screenshot({path:'error.png'});
    await expect(page.locator("h3[data-test ='error']")).toBeVisible();
    await page.screenshot({path:'error1.png'});
})
