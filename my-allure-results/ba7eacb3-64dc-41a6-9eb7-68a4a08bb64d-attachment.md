# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assignments\registrationTest.spec.js >> Data-Driven User Registration using JSON
- Location: tests\Assignments\registrationTest.spec.js:4:1

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://automationteststore.com/index.php?rt=account/create", waiting until "load"

```

# Test source

```ts
  1  | const {  test, expect } = require("@playwright/test");
  2  | var testdata = require('../../testdatas.json');
  3  | 
  4  | test('Data-Driven User Registration using JSON', async ({ page }) => {
  5  | 
> 6  |   await page.goto('https://automationteststore.com/index.php?rt=account/create');
     |              ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  7  | 
  8  |   await page.locator('#AccountFrm_firstname').fill(testdata.firstName);
  9  |   await page.locator('#AccountFrm_lastname').fill(testdata.lastName);
  10 |   await page.locator('#AccountFrm_email').fill(testdata.email);
  11 |   await page.locator('#AccountFrm_telephone').fill(testdata.telephone);
  12 |   await page.locator('#AccountFrm_fax').fill(testdata.fax);
  13 |   await page.locator('#AccountFrm_company').fill(testdata.company);
  14 | 
  15 |   await expect(page.locator('#AccountFrm_firstname')).toHaveValue(testdata.firstName);
  16 |   await expect(page.locator('#AccountFrm_lastname')).toHaveValue(testdata.lastName);
  17 |   await expect(page.locator('#AccountFrm_email')).toHaveValue(testdata.email);
  18 |   await expect(page.locator('#AccountFrm_telephone')).toHaveValue(testdata.telephone);
  19 |   await expect(page.locator('#AccountFrm_fax')).toHaveValue(testdata.fax);
  20 |   await expect(page.locator('#AccountFrm_company')).toHaveValue(testdata.company);
  21 | });
```