// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    globalSetup: require.resolve('./global-setup.ts'),
    use: {
        // Tell all tests to load signed-in state from 'storageState.json'.
        storageState: 'standardUserStorageState.json',
    },
    projects: [
        {
            name: 'Chrome',
            use: {
                browserName: 'chromium',
                channel: 'chrome',
            },
        },
        {
            name: 'Desktop Safari',
            use: {
                browserName: 'webkit',
                viewport: { width: 1200, height: 750 },
            }
        },
        {
            name: 'Desktop Firefox',
            use: {
                browserName: 'firefox',
            }
        },
        {
            name: 'Pixel 4',
            use: {
                browserName: 'chromium',
                ...devices['Pixel 4'],
            },
        },
        {
            name: 'iPhone 11',
            use: {
                browserName: 'webkit',
                ...devices['iPhone 11'],
            },
        },
    ],
};
export default config;