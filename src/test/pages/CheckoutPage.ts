import { Page } from 'playwright';
import { CheckoutSelectors } from '../selectors/CheckoutSelectors';

export class CheckoutPage {
    constructor(private page: Page) { }

    async fillFirstName(firstName: string) {
        await this.page.locator(CheckoutSelectors.firstNameField).fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.page.locator(CheckoutSelectors.lastNameField).fill(lastName);
    }

    async fillPostalCode(postalCode: string) {
        await this.page.locator(CheckoutSelectors.postalCodeField).fill(postalCode);
    }

    async clickToContinue() {
        await this.page.locator(CheckoutSelectors.continueButton).click();
    }

    async clickToFinish() {
        await this.page.locator(CheckoutSelectors.finishButton).click();
    }

    async getCompleteHeader() {
        return await this.page.locator(CheckoutSelectors.completeHeader).textContent();
    }
}
