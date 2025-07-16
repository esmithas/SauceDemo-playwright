import { Page } from 'playwright';
import { ProductsSelectors } from "../selectors/ProductsSelectors";

export class ProductsPage {
    constructor(private page: Page) { }

    async getMessageProducts() {
        return await this.page.locator(ProductsSelectors.productsHeading).innerText();
    }

    async getListProducts() {
        return await this.page.locator(ProductsSelectors.listProducts).all();
    }

    async getAddToCartButton() {
        return await this.page.locator(ProductsSelectors.addToCartButton).all();
    }

    async getCartBadge() {
        return await this.page.locator(ProductsSelectors.cartBadge).innerText();
    }

    async getRemoveFromCartButton() {
        return await this.page.locator(ProductsSelectors.removeFromCartButton).all();
    }

    async clickToAddToCart(titleProduct: string) {
        const productLocator = this.page.locator(ProductsSelectors.listProducts).filter({
            has: this.page.locator(ProductsSelectors.productName, { hasText: titleProduct })
        });
        await productLocator.locator(ProductsSelectors.addToCartButton).click();
    }

    async clickToCartLink() {
        await this.page.locator(ProductsSelectors.cartLink).click();
    }
}