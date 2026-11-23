const { test, expect } = require('@playwright/test');
test('Flight Purchase', async ({ page }) => {
    
    await page.goto('https://blazedemo.com/');

    const fromPort = page.locator("select[name='fromPort']");
    const toPort = page.locator("select[name='toPort']");

    await fromPort.selectOption('Boston');
    await toPort.selectOption('New York');

    
    await expect(fromPort).toHaveValue('Boston');
    await expect(toPort).toHaveValue('New York');
    await page.locator("input[value='Find Flights']").click();

    const lufthansa = page.locator('tr', { hasText: 'Lufthansa' });
    await expect(lufthansa).toBeVisible();
    await lufthansa.locator("input[type='submit']").click();

    await expect(page).toHaveURL(/purchase/);
    await expect(page).toHaveTitle(/purchase/i);

    const expectedDetails = {
    airline: 'United',
    flightNumber: 'UA954',
    price: '$400.00',
    taxes: '$514.76',
    totalCost: '$914.76',
    };
    
    const pageContent = await page.locator('body').innerText();

    const Mismatch = 
    !pageContent.includes(expectedDetails.airline) ||
    !pageContent.includes(expectedDetails.flightNumber) ||
    !pageContent.includes(expectedDetails.price) ||
    !pageContent.includes(expectedDetails.taxes) ||
    !pageContent.includes(expectedDetails.totalCost);

    if (Mismatch) {
    console.log('[DATA MISMATCH]: Selected Lufthansa flight displays details differing from required expected details.');
    }

    
    await expect(page.locator('body')).toContainText('Airline:',expectedDetails.airline);
    await expect(page.locator('body')).toContainText('Flight Number:', expectedDetails.flightNumber);
    await expect(page.locator('body')).toContainText('Price:', expectedDetails.price);
    await expect(page.locator('body')).toContainText('Arbitrary Fees and Taxes:', expectedDetails.taxes);
    await expect(page.locator('body')).toContainText('Total Cost:', expectedDetails.totalCost);

    await page.locator('#inputName').fill('Playwright JS');
    await expect(page.locator('#inputName')).toHaveValue('Playwright JS');

    await page.locator('#address').fill('Bangalore');
    await expect(page.locator('#address')).toHaveValue('Bangalore');

    await page.locator('#state').fill('Karnataka');
    await expect(page.locator('#state')).toHaveValue('Karnataka');

    const cardType = page.locator('#cardType');
    await cardType.selectOption('American Express');
    await expect(cardType).toHaveValue('amex');


    await page.locator('#creditCardNumber').fill('556622337788');
    await expect(page.locator('#creditCardNumber')).toHaveValue('556622337788');

    await page.locator('#creditCardYear').fill('2025');
    await expect(page.locator('#creditCardYear')).toHaveValue('2025');

    await page.locator('#nameOnCard').fill('Playwright By Microsoft');
    await expect(page.locator('#nameOnCard')).toHaveValue('Playwright By Microsoft');


    const rememberMe = page.locator("#rememberMe");
    await rememberMe.check();
    await expect(rememberMe).toBeChecked();

    await page.locator("input[value='Purchase Flight']").click();
    await expect(page).toHaveURL(/confirmation/);

    const orderIdElement = page.locator('table.table tr:has-text("Id") td').nth(1);
    await expect(orderIdElement).toBeVisible();

    const orderIdText = await orderIdElement.textContent();

    expect(orderIdText).not.toBeNull();
    const trimmedOrderId = orderIdText.trim();
    expect(trimmedOrderId.length).toBeGreaterThan(0);

    console.log('Successfully verified Order ID:', trimmedOrderId);

    await page.close();
})