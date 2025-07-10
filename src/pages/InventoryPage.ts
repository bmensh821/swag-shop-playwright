import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async sort(by: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.page.locator('[data-test=product_sort_container]').selectOption(by);
  }

  async addToCart(itemName: string) {
    const card = this.page.locator('.inventory_item').filter({ hasText: itemName });
    await card.locator('button:has-text("Add to cart")').click();
  }

  async openCart() { await this.page.locator('.shopping_cart_link').click(); }

  async expectGridVisible() {
    await expect(this.page.locator('.inventory_list')).toBeVisible();
  }
}
