// src/support/world.ts
import { setWorldConstructor, IWorldOptions, World as CucumberWorld } from '@cucumber/cucumber';
import { Browser, Page, chromium } from '@playwright/test';

export class PlaywrightWorld extends CucumberWorld {
  browser!: Browser;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options); // ✅ Important: Call the base class constructor
  }

  async init() {
    this.browser = await chromium.launch({ headless: false }); // for visual debugging
    this.page = await this.browser.newPage();
  }

  async dispose() {
    await this.browser.close();
  }
}

setWorldConstructor(PlaywrightWorld);
