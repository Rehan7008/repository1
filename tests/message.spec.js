const { test, expect } = require("@playwright/test");
test('Verify Single input Field', async({page})=>{

    await page.goto('https://selenium.qabible.in/simple-form-demo.php');
    const inputField = await page.locator('#single-input-field');
    await inputField.fill('Hello!');
    await page.getByRole('button',{name:'Show Message'}).click();
    await expect(page.locator('#message-one')).toContainText('Hello!');

}) 

test('Handling Radio Button', async({page}) => {

    await page.goto('https://selenium.qabible.in/radio-button-demo.php');
    await page.getByRole('radio').nth(0).click();
    await page.locator('#button-one').click();
    await expect(page.getByRole('radio').nth(0)).toBeChecked();
})

test('Handling Check Box', async({page}) => {

    await page.goto('https://selenium.qabible.in/check-box-demo.php');
    const checkBoxes = await page.getByRole('checkbox');
    await checkBoxes.nth(1).check();
    await checkBoxes.nth(2).check();
    await checkBoxes.nth(3).check();
    await checkBoxes.nth(4).check();

    await expect(checkBoxes.nth(1)).toBeChecked();
    await expect(checkBoxes.nth(2)).toBeChecked();
    await expect(checkBoxes.nth(3)).toBeChecked();
    await expect(checkBoxes.nth(4)).toBeChecked();
})
