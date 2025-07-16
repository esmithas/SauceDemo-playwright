import { Page } from 'playwright';
import { CartSelectors } from '../selectors/CartSelectors';

export class CartPage {
    constructor(private page: Page) { }

    async isProductInCart(productName: string): Promise<boolean> {
        const items = await this.page.locator(CartSelectors.cartItemName).allTextContents();
        return items.some(name => name.trim() === productName);
    }

    async clickToCheckout() {
        await this.page.locator(CartSelectors.checkoutButton).click();
    }
}