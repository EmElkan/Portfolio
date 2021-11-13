import { test, expect } from '@playwright/test';

const urls = require('../urls.json');
for (const url of urls) {
    test(`check ${url}`, async ({ page }) => {
        await page.goto(url);
    });
}