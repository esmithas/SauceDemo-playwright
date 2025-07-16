import { Page } from 'playwright';
import { LoginSelectors } from "../selectors/LoginSelectors";

export class LoginPage {
    constructor(private page: Page) { }

    async fillUsername(lastName: string) {
        await this.page.locator(LoginSelectors.usernameTexbox).fill(lastName);
    }

    async fillPassword(lastName: string) {
        await this.page.locator(LoginSelectors.passwordTexbox).fill(lastName);
    }

    async clickLogin() {
        await this.page.locator(LoginSelectors.loginButton).click();
    }

    async getErrorMessageAlert() {
        return await this.page.locator(LoginSelectors.alertErrorLabel).innerText();
    }
}