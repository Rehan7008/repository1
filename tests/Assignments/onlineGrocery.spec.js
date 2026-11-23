const { test, expect } = require("@playwright/test");

test('Online Grocery Order Placement', async({page}) => {

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');


    const brocolli = page.locator("div.product").filter({ hasText: 'Brocolli' });
    await brocolli.getByRole('button', { name: 'ADD TO CART' }).click();

    await page.locator("img[alt='Cart']").click();

    const cartItem = page.getByRole('listitem').getByText('Brocolli - 1 Kg');
    await expect(cartItem).toBeVisible();
    
    await page.locator("//button[normalize-space()='PROCEED TO CHECKOUT']").click();

    await expect(page).toHaveURL(/.*cart/);
    await page.locator("//button[normalize-space()='Place Order']").click();

    const selectCountry = page.locator("select");
    await selectCountry.selectOption('India');

    await page.locator('input.chkAgree').check();
    await expect(page.locator('input.chkAgree')).toBeChecked();

    await page.locator("button:text('Proceed')").click();

    const confirmationMessage = page.locator("//span[contains(text(),'Thank you, your order has been placed successfully')]");
    await expect(confirmationMessage).toContainText('Thank you, your order has been placed successfully');

    const confirmationText = await confirmationMessage.textContent();
    console.log("Execution Output:", confirmationText.trim());
    
})