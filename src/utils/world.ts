import { setWorldConstructor, IWorldOptions, setDefaultTimeout, After } from '@cucumber/cucumber';
import { Browser, Page, chromium } from '@playwright/test';

export class PlaywrightWorld {
  browser!: Browser;
  page!: Page;

  constructor(options: IWorldOptions) {
    // Optional: you can access options.parameters if passed
  }

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
  }

  async close() {
    await this.browser?.close();
  }
}

setWorldConstructor(PlaywrightWorld);
setDefaultTimeout(20000);

After(async function () {
  if (this.close) {
    await this.close();
  }
});
