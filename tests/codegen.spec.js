import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin@email.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('admin@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.locator('h1')).toContainText('Learn Automation Courses');
  await page.getByRole('button', { name: 'Add to Cart right arrow' }).nth(3).click();
  await page.getByRole('button', { name: 'Cart 1' }).click();
  await page.getByRole('button', { name: 'Enroll Now' }).click();
  await expect(page.getByRole('dialog')).toContainText('Enroll Now');
  await page.locator('#address').click();
  await page.locator('#address').fill('danimtest,123 street ,rv lane');
  await page.locator('#phone').click();
  await page.locator('#phone').fill('4873920313');
  await expect(page.getByRole('dialog')).toContainText('Total Price: ₹999');
  await page.getByRole('dialog').getByRole('button', { name: 'Enroll Now' }).click();
  await expect(page.locator('h4')).toContainText('Your order id is');
  await page.getByRole('button', { name: 'Cancel' }).click();
});


test.skip('Signup', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.getByRole('link', { name: 'New user? Signup' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Rehan');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('reh1@gmail.com');
  await page.getByRole('textbox', { name: 'Password must be atleast 6' }).click();
  await page.getByRole('textbox', { name: 'Password must be atleast 6' }).fill('password@123');
  await page.getByRole('checkbox', { name: 'PlaywrightTests' }).check();
  await page.getByText('Male', { exact: true }).click();
  await page.locator('#gender1').check();
  await page.locator('#state').selectOption('Kerala');
  await page.locator('#hobbies').selectOption('Reading');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByRole('button', { name: 'close' }).click();
});


test.skip('Spicejet', async ({ page }) => {
  await page.goto('https://www.spicejet.com/');
  await page.getByTestId('to-testID-origin').getByRole('textbox').click();
  await page.getByTestId('to-testID-destination').getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^International$/ }).first().click();
  await page.getByTestId('departure-date-dropdown-label-test-id').click();
  await page.getByTestId('return-date-dropdown-label-test-id').click();
  await page.locator('div').filter({ hasText: /^1 Adult$/ }).first().click();
  await page.getByTestId('Children-testID-plus-one-cta').dblclick();
  await page.getByTestId('Infant-testID-plus-one-cta').click();
  await page.getByTestId('Adult-testID-plus-one-cta').dblclick();
  await page.getByText('CurrencyINR').click();
  await page.getByTestId('home-page-flight-cta').click();
  await page.waitForTimeout(5000);
  await expect(page.locator('body')).toContainText('Government Employee Fare');
  await page.locator('div').filter({ hasText: /^Modify Search$/ }).nth(1).click();
  await page.getByTestId('home-page-travellers').click();
  await page.getByTestId('Adult-testID-minus-one-cta').click();
  await page.getByTestId('home-page-flight-cta').click();
});

test('Rahul shetty', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.getByText('Radio1').click();
  await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').check();
  await page.getByRole('textbox', { name: 'Type to Select Countries' }).click();
  await page.getByRole('textbox', { name: 'Type to Select Countries' }).fill('Indi');
  await page.locator('#ui-id-39').click();
  await page.locator('#dropdown-class-example').selectOption('option2');
  await page.locator('#checkBoxOption1').check();
  await page.locator('#checkBoxOption3').check();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Open Window' }).click();
  const page1 = await page1Promise;
  await expect(page1.locator('h1')).toContainText('Invalid SSL certificate');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Open Tab' }).click();
  const page2 = await page2Promise;
  await expect(page2.getByRole('banner')).toContainText('Visit cloudflare.com for more information.');
  await page.getByRole('textbox', { name: 'Enter Your Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('Rehan');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Alert' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('Rehan');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('cell', { name: 'Master Selenium Automation in' }).click();
  await expect(page.locator('body')).toContainText('Master Selenium Automation in simple Python Language');
  await page.getByRole('textbox', { name: 'Hide/Show Example' }).click();
  await page.getByRole('textbox', { name: 'Hide/Show Example' }).fill('show example');
  await page.getByRole('button', { name: 'Show' }).click();
  await page.getByText('Web Table Fixed header').click();
  await expect(page.locator('body')).toContainText('Engineer');
  await expect(page.getByRole('textbox', { name: 'Hide/Show Example' })).toHaveValue('show example');
  await expect(page.locator('body')).toContainText('Total Amount Collected: 296');
  await page.getByRole('button', { name: 'Mouse Hover' }).click();
  await page.getByRole('link', { name: 'Top' }).click();
  await page.locator('iframe[name="iframe-name"]').contentFrame().getByText('Get 30% OFF on Silver and Platinum Packages. Use coupon RAHULSHETTY21051 at').click();
  await page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('list').filter({ hasText: 'contact@rahulshettyacademy.com' }).click();
  await page.locator('iframe[name="iframe-name"]').contentFrame().getByText('Register Login').click();
  await page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('link', { name: 'VIEW ALL COURSES' }).click();
  await expect(page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('main')).toContainText('Browse products');
});



