import { test, expect } from '@playwright/test';

test.describe.parallel('Admin tests', () => {
    test.use({ storageState: 'standardUserStorageState.json' });

    test('view inventory', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/inventory.html');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.click('text=Sauce Labs Bolt T-Shirt');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=1');
        await page.click('text=Sauce Labs Bolt T-Shirt');
    });
});

test.describe.parallel('Problem tests', () => {
    test.use({ storageState: 'problemUserStorageState.json' });
    test.fixme();

    test('problem view inventory', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/inventory.html');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.click('text=Sauce Labs Bolt T-Shirt');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=1');
        await page.click('text=Sauce Labs Bolt T-Shirt');
    });
});