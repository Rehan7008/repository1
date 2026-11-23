exports.PlaceOrderPage = class PlaceOrderPage{

    constructor(page){

        this.page = page;
        this.placeOrderButton = 'button[data-target="#orderModal"]';
        this.nameInput = '#name';
        this.countryInput = '#country';
        this.cityInput = '#city';
        this.creditcardInput = '#card';
        this.monthInput = '#month';
        this.yearInput = '#year';
        this.purchaseButton = 'button[onclick="purchaseOrder()"]';
        this.okButton = '.confirm btn btn-lg btn-primary';

    }

    async clickOnPlaceOrderButton(){
        await this.page.locator(this.placeOrderButton).click();

    }

    async fillCustomerDetails(name,country,city,creditcard,month,year){
        await this.page.locator(this.nameInput).fill(name);
        await this.page.locator(this.countryInput).fill(country);
        await this.page.locator(this.cityInput).fill(city);
        await this.page.locator(this.creditcardInput).fill(creditcard);
        await this.page.locator(this.monthInput).fill(month);
        await this.page.locator(this.yearInput).fill(year);

    }

    async clickOnPurchaseButton(){
        await this.page.locator(this.purchaseButton).click();
        
    }

}