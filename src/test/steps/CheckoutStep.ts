import { BeforeStep } from '@cucumber/cucumber';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';
import IUser from '../interfaces/IUser';

let checkoutPage: CheckoutPage;

BeforeStep(async function () {
    checkoutPage = new CheckoutPage(this.page);
});

When('ingresa sus datos personales', async function (dataTable) {
    const userInfo: IUser[] = dataTable.hashes();
    await checkoutPage.fillFirstName(userInfo[0].firstName);
    await checkoutPage.fillLastName(userInfo[0].lastName);
    await checkoutPage.fillPostalCode(userInfo[0].postalCode);
});

When('continúa con el proceso de pago', async function () {
    await checkoutPage.clickToContinue();
    await checkoutPage.clickToFinish();
});

Then('debería ver un mensaje de confirmación {string}', async function (message: string) {
    expect(await checkoutPage.getCompleteHeader()).toEqual(message);
});
