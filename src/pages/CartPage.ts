import { Page, expect } from '@playwright/test';
import { CheckoutPage } from './CheckoutPage';

export class CartPage {
  private page: Page;
  static readonly path = '/cart';
  
  constructor(page: Page) {
    this.page = page;
  }

  private get cartItems() { return this.page.locator('.cart_item'); }
  private get checkoutBtn() { return this.page.locator('[data-test=checkout]'); } 

  async itemCount() {
    return this.cartItems.count();
  }

  async checkout() {
    await this.checkoutBtn.click();
    return new CheckoutPage(this.page);
  }
}
