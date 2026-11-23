import { test, expect } from '@playwright/test';

import { LoginPage } from "./loginPage";
import { HomePage } from './HomePage';
import { CartPage } from './Cartpage';
import { PlaceOrderPage } from './PlaceorderPage';

test('Demoblaze Test', async({page}) => {  
//login

   const login = new LoginPage(page);
   await login.gotoNavlink();
   await login.loginForm('rehanmuhammad', 'test@123');

//Home
    const home = new HomePage(page);
    await home.addProductToCart("Nexus 6");
    await page.waitForTimeout(3000);
    await home.gotoCart();

//Cart
    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const status =  await cart.checkProductInCart("Nexus 6");

//PlaceOrder

    const order = new PlaceOrderPage(page);
    await order.clickOnPlaceOrderButton();
    await order.fillCustomerDetails('rehan','india','kerala','658985598','07','2026');
    await order.clickOnPurchaseButton();
})
