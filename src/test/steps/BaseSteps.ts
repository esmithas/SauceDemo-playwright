import { BeforeStep } from '@cucumber/cucumber';
import { Given } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

let basePage: BasePage;

BeforeStep(async function () {
    basePage = new BasePage(this.page);
});

Given('que el cliente accede a la página de inicio de Sauce Demo', async function () {    
    await basePage.goto();
    expect(await basePage.getMessageWelcome()).toEqual('Swag Labs');
});