const { test, expect } = require('@playwright/test');

test('Test Case 1: Empty Login Attempt', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/login');
    
    const submitButton = page.locator("button[type='submit']");
    await expect(submitButton).toBeVisible();
    await submitButton.click();
    const errorMessage = page.locator('.errorMessage');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Email and Password is required');

});

test('Test Case 2: Login with Email Only', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/login');

    await page.locator('#email1').fill('sibi@gmail.com');

    const submitButton = page.locator("button[type='submit']");
    await expect(submitButton).toBeVisible();
    await submitButton.click();

    const errorMessage = page.locator('.errorMessage');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Password is required');
});

test('Test Case 3: Login with Password Only', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/login');

    await page.locator('#password1').fill('sibi@gmail.com');

    const submitButton = page.locator("button[type='submit']");
    await expect(submitButton).toBeVisible();
    await submitButton.click();

    const errorMessage = page.locator('.errorMessage');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Email is required');
});

test('Test Case 4: Login with Invalid Credentials', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/login');

    await page.locator('#email1').fill('sibi@gmail.com');
    await page.locator('#password1').fill('sibi1@gmail.com');

    const submitButton = page.locator("button[type='submit']");
    await expect(submitButton).toBeVisible();
    await submitButton.click();
    
    const errorMessage = page.locator('.errorMessage');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText("Email and Password Doesn't match");
});
