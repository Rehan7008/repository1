const { test, expect } = require("@playwright/test");
import { login } from "../Utils/login.js";
import { openInventory } from "../Utils/navigation.js";

test('Login and Navigate', async({page}) => {

    await login(page,'standard_user','secret_sauce');
    await expect(page).toHaveURL(/inventory/);
    await openInventory(page);
    await expect(page.locator('.title')).toHaveText('Products');
})