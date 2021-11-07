import { test, expect } from '@playwright/test';

test.describe.parallel('Admin tests', () => {
    test.use({ storageState: 'standardUserStorageState.json' });

    test('view inventory', async ({ page }) => {
        const title = page.locator('.inventory_details_desc_container');
        await page.goto('https://www.saucedemo.com/inventory.html');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.click('text=Sauce Labs Bolt T-Shirt');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=1');
        await expect(title).toHaveText(/Sauce Labs Bolt T-Shirt/);
    });

    test('back to products', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/inventory-item.html?id=1');
        await page.click('[data-test="back-to-products"]');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });
});

test.describe('Problem tests', () => {
    test.use({ storageState: 'problemUserStorageState.json' });
    test.fixme();

    test('problem view inventory', async ({ page }) => {
        const title = page.locator('.inventory_details_desc_container');
        await page.goto('https://www.saucedemo.com/inventory.html');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.click('text=Sauce Labs Bolt T-Shirt');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=1');
        await expect(title).toHaveText(/Sauce Labs Bolt T-Shirt/);
    });
});