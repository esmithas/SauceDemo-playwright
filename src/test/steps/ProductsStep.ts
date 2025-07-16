import { BeforeStep } from '@cucumber/cucumber';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import IProduct from '../interfaces/IProduct';

let productsPage: ProductsPage;

BeforeStep(async function () {
    productsPage = new ProductsPage(this.page);
});

When('selecciona y agrega los productos al carrito', async function (dataTable) {
    const products: IProduct[] = dataTable.hashes();
    this.addedProducts = products;
    for (const product of products) {
        await productsPage.clickToAddToCart(product.titleProduct);
    }
});

When('accede al carrito desde la barra de navegación', async function () {
    await productsPage.clickToCartLink();
});

Then('debería visualizar la página de productos', async function () {
    expect(await productsPage.getMessageProducts()).toEqual('Products');
});

Then('el contador del carrito debería incrementarse en {string}', async function (quantity: string) {
    expect(await productsPage.getCartBadge()).toEqual(quantity);
});