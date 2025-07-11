import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  private page: Page;
  static readonly path = '/checkout';

  constructor(page: Page) {
    this.page = page;
  }

  private get cartItems() { return this.page.locator('.cart_item'); }
  private get checkoutIcon() { return this.page.locator('[data-test=checkout]')}

  async itemCount() {
    return this.cartItems.count();
  }

  async checkout() {
    await this.checkoutIcon.click();
  }
}
