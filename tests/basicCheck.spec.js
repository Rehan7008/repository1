const {test,expect} = require('@playwright/test')
test('Verify URL contains signup',async({page}) => {
    await page.goto('https://freelance-learn-automation.vercel.app/signup')
    const currentURL = page.url()
    console.log('Current URL is',currentURL)
    expect(currentURL).toContain('signup')

})

test('Verify Title contains Automation', async({page}) => {
    await page.goto('https://freelance-learn-automation.vercel.app')
    const pageTitle = await page.title()
    console.log('Page Title is',pageTitle)
    expect(pageTitle).toContain('Automation')

})