exports.LoginPage = class LoginPage{

    constructor(page){

        this.page = page;
        this.loginLink = "#login2";
        this.usernameTextbox = "#loginusername";
        this.passwordTextbox = "#loginpassword";
        this.loginButton = "button[onclick='logIn()']";
    }

    async gotoNavlink(){

        await this.page.goto('https://www.demoblaze.com/index.html');

    }

    async loginForm(username, password){

        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameTextbox).fill(username);
        await this.page.locator(this.passwordTextbox).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}