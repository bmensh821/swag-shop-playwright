import { Page, expect } from '@playwright/test';

export class InventoryPage {

  private page: Page;
  static readonly path = '/inventory.html';
  
  constructor(page: Page) {
    this.page = page;
  }

    private get sortDropdown() {
    return this.page.locator('[data-test=product_sort_container]');
  }
  private get shoppingCart() { return this.page.locator('.shopping_cart_link');  }
  private get inventoryItems() { return this.page.locator('.inventory_item'); }

  async sort(by: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.sortDropdown.selectOption(by);
  }

  async addToCart(itemName: string) {
    const card = this.page.locator('.inventory_item').filter({ hasText: itemName });
    await card.locator('button:has-text("Add to cart")').click();
  }

  async openCart() { await this.shoppingCart.click(); }

  async expectGridVisible() {
    await expect(this.inventoryItems).toBeVisible();
  }
}
