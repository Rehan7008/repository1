const {test,expect}=require('@playwright/test')
test ('Saucedemo test', async({page}) => {
     
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input#user-name').fill('standarduser')
    await page.locator('input#password').fill('secret_sauce')
    await page.locator('input[type="submit"]').click()
   // console.log(await page.locator("h3[role='alert']").textContent('Epic sadface: Username and password do not match any user in this service'))
    // const errorMsg = await expect(page.locator("h3[role='alert']")).toContainText('Epic sadface')
    // console.log('Error Message is', errorMsg)
    const errorMessage = await page.locator("h3[data-test='error']").textContent();
    console.log("Error Message:", errorMessage);
    await page.pause()
})