import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

//let page: Page;
//let loginPage: LoginPage;
//let inventoryPage: InventoryPage;

Given('I am on the login page', async function () {
  console.log('[Step] this is', this); // should now show PlaywrightWorld

  await this.init(); // uses PlaywrightWorld
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
});

When('I log in with {string} and {string}', async function (username: string, password: string) {
  this.inventoryPage = await this.loginPage.login(username, password);
});

Then('I should see the products page', async function () {
  if (!this.inventoryPage) {
    throw new Error("inventoryPage is undefined");
  }
  await this.inventoryPage.expectGridVisible(); // assuming this method exists
  await this.dispose(); // close browser;
});
