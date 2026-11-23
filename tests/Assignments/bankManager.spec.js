const { test, expect } = require("@playwright/test");

test('Bank Manager Operations', async({page}) => {

    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    await page.locator("button[ng-click='manager()']").click();

    await expect(page.getByRole('button', { name: 'Add Customer' })).toBeVisible();

    await page.getByRole('button', { name: 'Add Customer' }).click();
  
    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Any name');
    await page.getByPlaceholder('Post Code').fill('682001');

    page.once("dialog", (dia) => {
        
        console.log("Add Customer Alert Message:", dia.message());
        expect(dia.message()).toContain("Customer added successfully");
        dia.accept();
    })

    await page.locator("button[type='submit']").click();

    await page.getByRole('button', { name: 'Open Account' }).click();

    await page.locator('#userSelect').selectOption({ value: '6' });

    await page.locator('#currency').selectOption('Dollar');

    page.once('dialog', (dia) => {
    console.log("Open Account Alert Message:", dia.message());
    expect(dia.message()).toContain('Account created successfully');
    dia.accept();
    });

    await page.locator("button[type='submit']").click();

    await page.getByRole('button', { name: 'Customers' }).click();

    const search = page.getByPlaceholder('Search Customer')
    await  search.fill('Any Name');

    const tableRow = page.locator('tbody tr');
    await expect(tableRow).toHaveCount(1);

    // const customerDetails = await tableRow.textContent();
    // console.log("Customer Details:", customerDetails.trim());

    const customerDetails = tableRow.filter({hasText:'John'});

    const all_tds = await customerDetails.locator('td');

    const firstName = await all_tds.nth(0).textContent();
    const lastName = await all_tds.nth(1).textContent();
    const postCode = await all_tds.nth(2).textContent();
    const accountNumber = await all_tds.nth(3).textContent();

    console.log("Customer Details:",  firstName , lastName, postCode, accountNumber);

  
    await tableRow.getByRole('button', { name: 'Delete' }).click();

    await search.fill('');
    await search.fill('Any Name');
    await expect(page.locator('tbody tr')).toHaveCount(0);

    console.log("Deletion Confirmation: Customer successfully deleted");

})
