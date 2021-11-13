import { test, expect } from '@playwright/test';

test.describe.parallel('admin tests', () => {
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

test.describe('problem tests', () => {
    test.use({ storageState: 'problemUserStorageState.json' });
    test.fixme(true, 'Problematic user account');

    test('problem view inventory', async ({ page }) => {
        const title = page.locator('.inventory_details_desc_container');
        await page.goto('https://www.saucedemo.com/inventory.html');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.click('text=Sauce Labs Bolt T-Shirt');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=1');
        await expect(title).toHaveText(/Sauce Labs Bolt T-Shirt/);
        await page.waitForSelector('.inventory_details_img');
        expect(await page.screenshot()).toMatchSnapshot('bolt-tshirt.png');
    });
});