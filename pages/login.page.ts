import { Page } from "@playwright/test";

class LoginPage {
    readonly page:Page
    constructor(page:Page){
        this.page= page;
    }
    elements = {
        username: ()=> this.page.locator("#user-name"),
        password: () => this.page.locator("#password"),
        loginBtn: ()=> this.page.locator("#login-button"),
        errorMsg: ()=> this.page.locator("h3[data-test=error]")
    }

    async saisirUserName(username: string){
        await this.elements.username().fill(username)
    }
    async saisirPassword(pass:string){
        await this.elements.password().fill(pass)
    }
    async cliquerBtn(){
        await this.elements.loginBtn().click()
    }
    async getErrorMsg(){
        return this.elements.errorMsg()
    }
}

export default LoginPage