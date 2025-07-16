import { BeforeStep } from "@cucumber/cucumber";
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

let loginPage: LoginPage;

BeforeStep(async function () {
  loginPage = new LoginPage(this.page);
});

Given('que el cliente inició sesión con {string} y la contraseña {string}', async function (username: string, password: string) {
    await loginPage.fillUsername(username);
    await loginPage.fillPassword(password);
    await loginPage.clickLogin();
    // Then debería visualizar la página de productos
});

Given('el cliente ingresa el usuario {string} y la contraseña {string}', async function (username: string, password: string) {
    await loginPage.fillUsername(username);
    await loginPage.fillPassword(password);
});

When('hace clic en el botón de login', async function () {
    await loginPage.clickLogin();
});

Then('debería ver un mensaje de error {string}', async function (message: string) {
    const textAlert = await loginPage.getErrorMessageAlert();
    expect(textAlert).toEqual(message)
});
