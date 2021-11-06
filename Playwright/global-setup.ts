import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();

    const standardUser = await browser.newPage();
    await standardUser.goto('https://www.saucedemo.com/');
    await standardUser.click('[data-test="username"]');
    await standardUser.fill('[data-test="username"]', 'standard_user');
    await standardUser.click('[data-test="password"]');
    await standardUser.fill('[data-test="password"]', 'secret_sauce');
    await standardUser.click('[data-test="login-button"]');
    await standardUser.context().storageState({ path: 'standardUserStorageState.json' });

    const problemUser = await browser.newPage();
    await problemUser.goto('https://www.saucedemo.com/');
    await problemUser.click('[data-test="username"]');
    await problemUser.fill('[data-test="username"]', 'problem_user');
    await problemUser.click('[data-test="password"]');
    await problemUser.fill('[data-test="password"]', 'secret_sauce');
    await problemUser.click('[data-test="login-button"]');
    await problemUser.context().storageState({ path: 'problemUserStorageState.json' });

    await browser.close();
}

export default globalSetup;