# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: faker2.spec.js >> Testing in a website
- Location: tests\faker2.spec.js:4:1

# Error details

```
TypeError: _faker.faker.location.cityAddress is not a function
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { faker } from "@faker-js/faker";
  3  | 
  4  | test('Testing in a website', async({page}) => {
  5  | 
  6  |     const name = faker.person.fullName();
  7  |     const email = faker.internet.email();
  8  |     const currentAddress = faker.location.streetAddress();
> 9  |     const permanentAddress = faker.location.cityAddress();
     |                                             ^ TypeError: _faker.faker.location.cityAddress is not a function
  10 | 
  11 |     console.log('name:',name);
  12 |     console.log('email:',email);
  13 |     console.log('current address:',currentAddress);
  14 |     console.log('permanent address:',permanentAddress);
  15 | 
  16 |     await page.goto('https://demoqa.com/text-box');
  17 | 
  18 |     await page.fill('#userName',name);
  19 |     await page.fill('#userEmail',email);
  20 |     await page.fill('#currentAddress',currentAddress);
  21 |     await page.fill('#permanentAddress',permanentAddress);
  22 | 
  23 |      // Submit (scroll first, because ads can overlap the button)
  24 |     await page.locator('#submit').scrollIntoViewIfNeeded();
  25 |     await page.locator('#submit').click();
  26 | 
  27 |     const output = page.locator('#output');
  28 |     await expect(output.locator('#name')).toContainText(name);
  29 |     await expect(output.locator('#email')).toContainText(email);
  30 |     await expect(output.locator('#currentAddress')).toContainText(currentAddress);
  31 |     await expect(output.locator('#permanentAddress')).toContainText(permanentAddress);
  32 | 
  33 | 
  34 | })
```