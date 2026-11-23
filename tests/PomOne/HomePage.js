exports.HomePage = class HomePage{

    constructor(page){

        this.page = page;
        // this.productList = "//*[@id='tbodyid']/div/div/div/h4/a";
        this.productList = "#tbodyid .card-title a";
        this.addToCartButton = '//a[normalize-space()="Add to cart"]';
        this.cartIcon = "#cartur";

    }

    async addProductToCart(productName){

        await this.page.waitForSelector(this.productList);
        // const productsList = await this.page.$$(this.productList);
        // for(const product of productsList){
        //     if(productName == await product.textContent()){
        //         await product.click();
        //         break;
        //     }
        // }

        // await this.page.locator(this.productList).first().waitFor();
        // await this.page.locator(this.productList).filter({ hasText: productName }).nth(2).click();

        await this.page.locator(this.productList).first().waitFor();
        await this.page.locator(this.productList).filter({ hasText: productName }).first().click();

        this.page.on('dialog', async dialog =>{
            if(dialog.message().includes('added')){
                await dialog.accept();
            }
        })

        await this.page.locator(this.addToCartButton).click();
    }

    async gotoCart(){
        
        await this.page.locator(this.cartIcon).click();
    }
    
}

// exports.HomePage = class HomePage {

//     constructor(page) {
//         this.page = page;
//         this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';
//         this.addToCartbtn = '//a[normalize-space()="Add to cart"]';
//         this.cart = '#cartur';
//     }

//     async addProductToCart(productName) {
// await this.page.waitForSelector(this.productList);
// const productList = await this.page.$$(this.productList);
//         for (const product of productList) {
//             if (productName == await product.textContent()) {
//                 await product.click()
//                 break;
//             }
//         }
//      this.page.on('dialog', async dialog => {
//     if (dialog.message().includes('added')) {
//         await dialog.accept();
//     }
// });
// await this.page.locator(this.addToCartbtn).click();
//     }
// async gotoCart() {
//         await this.page.locator(this.cart).click();
//     }

// }