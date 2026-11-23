class ShippingDetails{

    constructor(page){

        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
    }

    async shipment(firstname,lastname,postalcode){
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.postalCode.fill(postalcode)
    }

    async submitShipping(){
        await this.continueButton.click();
    }
}
module.exports = ShippingDetails;