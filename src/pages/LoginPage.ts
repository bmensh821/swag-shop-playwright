import { expect, Page } from "@playwright/test";
import { InventoryPage } from "./InventoryPage";

export class LoginPage {
  private page: Page;
  static readonly path = '/';

    constructor(page: Page) {
    this.page = page;
  }

  private get username() { return this.page.locator('[data-test=user-name]'); }
  private get password() { return this.page.locator('[data-test=password]'); }
  private get loginBtn() { return this.page.locator('[data-test=login-button]'); }
  get error()            { return this.page.locator('[data-test=error]'); }

  async goto() {
    await this.page.goto(LoginPage.path);
  }

  /** Logs in and returns the next screen (InventoryPage) */
  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
    return new InventoryPage(this.page);
  }

  async expectError(text?: string) {
    await expect(this.error).toBeVisible();
    if (text) await expect(this.error).toHaveText(text);
  }
}
