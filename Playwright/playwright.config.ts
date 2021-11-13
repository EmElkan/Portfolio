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
            name: 'Desktop_Chrome',
            use: {
                browserName: 'chromium',
                channel: 'chrome',
            },
        },
        {
            name: 'Desktop_Safari',
            use: {
                browserName: 'webkit',
                viewport: { width: 1200, height: 750 },
            }
        },
        {
            name: 'Desktop_Firefox',
            use: {
                browserName: 'firefox',
            }
        },
        {
            name: 'Pixel_4',
            use: {
                browserName: 'chromium',
                ...devices['Pixel 4'],
            },
        },
        {
            name: 'iPhone_12_Pro',
            use: {
                browserName: 'webkit',
                ...devices['iPhone 12 Pro'],
            },
        },
    ],
};
export default config;