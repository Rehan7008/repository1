const { expect } = require("@playwright/test");

class SummaryPage{

    constructor(page){
        this.page = page;
        this.subtotal = page.locator('.summary_subtotal_label');
        this.finishButton = page.locator('#finish');

    }

    async summaryDetails(){
        const itemTotal = await this.subtotal.textContent();
        console.log(itemTotal);
        await expect(itemTotal).toContain('Item total: $');

    }

    async clickFinish(){
        await this.finishButton.click();
    }
}
module.exports = SummaryPage;