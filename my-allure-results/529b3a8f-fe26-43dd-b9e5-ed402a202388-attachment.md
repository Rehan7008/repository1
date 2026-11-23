# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assignments\qabrains_login.spec.js >> QA Brains Login Module >> @sanity @login User see the Validation error when the email field is empty
- Location: tests\Assignments\qabrains_login.spec.js:28:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.text-red-500 text-sm mt-1').first()
Expected: visible
Timeout: 6000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.text-red-500 text-sm mt-1').first() with timeout 6000ms
  - waiting for locator('.text-red-500 text-sm mt-1').first()

```

```yaml
- banner:
  - link "logo (Practice Site)":
    - /url: /ecommerce
    - img "logo"
    - text: (Practice Site)
- link "Back to home":
  - /url: /
  - img
  - text: Back to home
- heading "Login" [level=2]
- alert:
  - heading "Accepted email:" [level=4]
  - list:
    - listitem: test@qabrains.com
    - listitem: practice@qabrains.com
    - listitem: student@qabrains.com
  - heading "Password:" [level=4]
  - list:
    - listitem: Password123
    - listitem: Password123
    - listitem: Password123
- text: Email*
- textbox "Email*":
  - /placeholder: eg. user@user.com
- paragraph: Email is a required field
- text: Password*
- textbox "Password*":
  - /placeholder: "*******"
  - text: Password123
- button:
  - img
- button "Login":
  - text: Login
  - img
- region "Notifications alt+T"
- alert
```

# Test source

```ts
  1  | const { test,expect } = require("@playwright/test");
  2  | 
  3  | test.describe('QA Brains Login Module', () => {
  4  | 
  5  |     test.beforeEach( async({page}) => {
  6  | 
  7  |         await page.goto('https://practice.qabrains.com/ecommerce/login');
  8  | 
  9  |     })
  10 | 
  11 |     test('@smoke @login Login with Valid credential should redirect to dashboard', async({page}) => {
  12 | 
  13 |         await page.fill('#email', 'test@qabrains.com' );
  14 |         await page.fill('#password', 'Password123');
  15 |         await page.getByRole('button', {name : 'Login'}).click();
  16 |         await expect(page).toHaveURL(/login/);
  17 |     })
  18 | 
  19 |     test('@regression @login Login with invalid credential to show error message', async({page}) => {
  20 | 
  21 |         await page.fill('#email', 'tes@qabrains.com' );
  22 |         await page.fill('#password', 'Password23');
  23 |         await page.getByRole('button', {name : 'Login'}).click();
  24 |         const errorMsg = page.locator('.text-red-500, [role="alert"], .error-message').first();
  25 |         await expect(errorMsg).toBeVisible();
  26 |     })
  27 | 
  28 |     test('@sanity @login User see the Validation error when the email field is empty', async({page}) => {
  29 | 
  30 |         await page.fill('#password', 'Password123');
  31 |         await page.getByRole('button', {name : 'Login'}).click();
  32 |         const validationMsg = page.locator('.text-red-500 text-sm mt-1').first();
> 33 |         await expect(validationMsg).toBeVisible();
     |                                     ^ Error: expect(locator).toBeVisible() failed
  34 |     })
  35 | 
  36 | })
```