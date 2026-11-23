const { test, expect } = require("@playwright/test");

test('Static Web Table', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const webTable = await page.locator("//table[@name = 'BookTable']");

    const row = await webTable.locator("tbody tr");

    const rows_count = await row.count();

    console.log("no: of rows:", rows_count);

    const cols = await webTable.locator("tbody tr th");

    const col_count = await cols.count();

    console.log("number of columns:", col_count);

    const selenium_row = row.filter({hasText:'Master In Selenium'});

    const all_tds = await selenium_row.locator('td');

    const BookName = await all_tds.nth(0).textContent();
    const Author = await all_tds.nth(1).textContent();
    const Subject = await all_tds.nth(2).textContent();
    const Price = await all_tds.nth(3).textContent();

    console.log( BookName , Author, Subject, Price);

})