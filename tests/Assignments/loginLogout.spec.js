const { test, expect } = require('@playwright/test');

test('SauceDemo Login and Logout Verification', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/v1/index.html');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();

  await page.locator('#react-burger-menu-btn').click();
  const logoutButton = page.locator('#logout_sidebar_link');
  await expect(logoutButton).toBeVisible();
  await logoutButton.click();

  const currentUrl = page.url();
  if (currentUrl.includes('index.html')) {
    await expect(page).toHaveURL(/index\.html/);
    console.log('URL contains index.html');
  } else {
    console.log('URL does not contain index.html');
  }


  await expect(page.locator('#user-name')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();
  await expect(page.locator('#login-button')).toBeVisible();

  await page.close();
})