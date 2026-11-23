const {  test, expect } = require("@playwright/test");
var testdata = require('../../testdatas.json');

test('Data-Driven User Registration using JSON', async ({ page }) => {

  await page.goto('https://automationteststore.com/index.php?rt=account/create');

  await page.locator('#AccountFrm_firstname').fill(testdata.firstName);
  await page.locator('#AccountFrm_lastname').fill(testdata.lastName);
  await page.locator('#AccountFrm_email').fill(testdata.email);
  await page.locator('#AccountFrm_telephone').fill(testdata.telephone);
  await page.locator('#AccountFrm_fax').fill(testdata.fax);
  await page.locator('#AccountFrm_company').fill(testdata.company);

  await expect(page.locator('#AccountFrm_firstname')).toHaveValue(testdata.firstName);
  await expect(page.locator('#AccountFrm_lastname')).toHaveValue(testdata.lastName);
  await expect(page.locator('#AccountFrm_email')).toHaveValue(testdata.email);
  await expect(page.locator('#AccountFrm_telephone')).toHaveValue(testdata.telephone);
  await expect(page.locator('#AccountFrm_fax')).toHaveValue(testdata.fax);
  await expect(page.locator('#AccountFrm_company')).toHaveValue(testdata.company);
});