const { test,expect } = require("@playwright/test");

test.describe('QA Brains Login Module', () => {

    test.beforeEach( async({page}) => {

        await page.goto('https://practice.qabrains.com/ecommerce/login');

    })

    test('@smoke @login Login with Valid credential should redirect to dashboard', async({page}) => {

        await page.fill('#email', 'test@qabrains.com' );
        await page.fill('#password', 'Password123');
        await page.getByRole('button', {name : 'Login'}).click();
        await expect(page).toHaveURL(/login/);
    })

    test('@regression @login Login with invalid credential to show error message', async({page}) => {

        await page.fill('#email', 'tes@qabrains.com' );
        await page.fill('#password', 'Password23');
        await page.getByRole('button', {name : 'Login'}).click();
        const errorMsg = page.locator("//ol[@dir='ltr']//li");
        await expect(errorMsg).toBeVisible();
    })

    test('@sanity @login User see the Validation error when the email field is empty', async({page}) => {

        await page.fill('#password', 'Password123');
        await page.getByRole('button', {name : 'Login'}).click();
        const validationMsg = page.locator('.text-red-500.text-sm.mt-1');
        await expect(validationMsg).toBeVisible();
    })

})