import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async itemCount() {
    return this.page.locator('.cart_item').count();
  }

  async checkout() {
    await this.page.locator('[data-test=checkout]').click();
  }
}
