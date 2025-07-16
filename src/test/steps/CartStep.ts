import { BeforeStep } from '@cucumber/cucumber';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

let cartPage: CartPage;

BeforeStep(async function () {
    cartPage = new CartPage(this.page);
});

When('el cliente procede a Checkout', async function () {
    await cartPage.clickToCheckout();
});

Then('debería ver la lista de productos seleccionados', async function () {
    for (const product of this.addedProducts) {
        const exists = await cartPage.isProductInCart(product.titleProduct);
        expect(exists).toBe(true);
    }
});