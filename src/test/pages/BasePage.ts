import { Page } from 'playwright';
import { BaseSelectors } from "../selectors/BaseSelectors";

export class BasePage {
    constructor(private page: Page) { }

    async goto() {
        await this.page.goto(process.env.URL_BASE, {
            waitUntil: 'load'
        });
    }

    async getMessageWelcome() {
        return await this.page.locator(BaseSelectors.welcomeHeading).innerText();
    }
}