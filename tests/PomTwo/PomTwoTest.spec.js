const { test,expect } = require("@playwright/test");

const Login = require('./loginPage.spec.js');
const Dashboard = require('./dashboard.spec.js');
const Cart = require('./Cart.spec.js');
const ShippingDetails = require('./ShippingDetails.spec.js');
const SummaryPage = require('./summaryPage.spec.js');
const { OrderConfirmation } = require("./OrderConfirmation.spec.js");

test('End to End Testing', async({page}) => {

    const username = 'standard_user';
    const password = 'secret_sauce';
    
    const productName = 'Sauce Labs Backpack';

    const firstname = 'rehan';
    const lastname = 'M';
    const postalcode = '757384';


    const login = new Login(page);

    await login.gotoNavigation();
    await login.validLogin(username,password);

    const dashboardobj = new Dashboard(page);

    await dashboardobj.printProducts();
    await dashboardobj.selectProduct(productName);

    const cart = new Cart(page);
    await cart.getChecked();
    await cart.clickCheckout();

    const shipping = new ShippingDetails(page);
    await shipping.shipment(firstname,lastname,postalcode);
    await shipping.submitShipping(); 

    const summary = new SummaryPage(page);
    await summary.summaryDetails();
    await summary.clickFinish();

    const confirmation = new OrderConfirmation(page);
    await confirmation.verifyOrderConfirmation();

})