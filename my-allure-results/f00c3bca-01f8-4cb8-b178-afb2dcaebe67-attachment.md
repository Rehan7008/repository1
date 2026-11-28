# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: faker.spec.js >> Generate a random user data
- Location: tests\faker.spec.js:4:1

# Error details

```
TypeError: _faker.faker.person.fullname is not a function
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { faker } from "@faker-js/faker";
  3  | 
  4  | test('Generate a random user data', async() => {
  5  | 
> 6  |     const name = faker.person.fullname();
     |                               ^ TypeError: _faker.faker.person.fullname is not a function
  7  |     const email = faker.person.email();
  8  |     const city = faker.person.city();
  9  | 
  10 |     console.log("name:",name);
  11 |     console.log("email:",email);
  12 |     console.log("city:",city);
  13 | 
  14 |     expect (name).toBeTruthy();
  15 |     expect  (email).toContain('@');
  16 | 
  17 | })
  18 | 
  19 | 
```