# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PomOne\demoblazeTest.spec.js >> Demoblaze Test
- Location: tests\PomOne\demoblazeTest.spec.js:7:1

# Error details

```
Error: elementHandle.textContent: Execution context was destroyed, most likely because of a navigation
Call log:
  - waiting for locator(':scope')

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - navigation [ref=f1e2]:
    - link "PRODUCT STORE" [ref=f1e3] [cursor=pointer]:
      - /url: index.html
    - list [ref=f1e6]:
      - listitem [ref=f1e7]:
        - link "Home (current)" [ref=f1e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=f1e9]: (current)
      - listitem [ref=f1e10]:
        - link "Contact" [ref=f1e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e12]:
        - link "About us" [ref=f1e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e14]:
        - link "Cart" [ref=f1e15] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=f1e16]:
        - link "Log in" [ref=f1e17] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=f1e18]:
        - link "Sign up" [ref=f1e19] [cursor=pointer]:
          - /url: "#"
    - generic [ref=f1e21]:
      - list [ref=f1e22]:
        - listitem [ref=f1e23] [cursor=pointer]
        - listitem [ref=f1e24] [cursor=pointer]
        - listitem [ref=f1e25] [cursor=pointer]
      - img "First slide" [ref=f1e28]
      - button "Previous" [ref=f1e29] [cursor=pointer]
      - button "Next" [ref=f1e32] [cursor=pointer]
  - generic [ref=f1e36]:
    - generic [ref=f1e38]:
      - link "CATEGORIES" [ref=f1e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=f1e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=f1e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=f1e42] [cursor=pointer]:
        - /url: "#"
    - list [ref=f1e45]:
      - listitem [ref=f1e46]:
        - button "Previous" [ref=f1e47]
      - listitem [ref=f1e48]:
        - button "Next" [ref=f1e49] [cursor=pointer]
```

# Test source

```ts
  1  | exports.HomePage = class HomePage{
  2  | 
  3  |     constructor(page){
  4  | 
  5  |         this.page = page;
  6  |         this.productList = "//*[@id='tbodyid']";
  7  |         this.addToCartButton = "a[onclick='addToCart(3)']";
  8  |         this.cartIcon = "#cartur";
  9  | 
  10 |     }
  11 | 
  12 |     async addProductToCart(productName){
  13 | 
  14 |         await this.page.waitForSelector(this.productList);
  15 |         const productsList = await this.page.$$(this.productList);
  16 |         for(const product of productsList){
> 17 |             if(productName == await product.textContent()){
     |                                             ^ Error: elementHandle.textContent: Execution context was destroyed, most likely because of a navigation
  18 |                 await product.click();
  19 |                 break;
  20 |             }
  21 |         }
  22 | 
  23 |         this.page.on('dialog', async dialog =>{
  24 |             if(dialog.message().includes('added')){
  25 |                 await dialog.accept();
  26 |             }
  27 |         })
  28 | 
  29 |         await this.page.locator(this.addToCartButton);
  30 |     }
  31 | 
  32 |     async gotoCart(){
  33 |         
  34 |         await this.page.locator(this.cartIcon).click();
  35 |     }
  36 |     
  37 | }
```