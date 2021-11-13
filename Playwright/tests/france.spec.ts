import { test, expect } from '@playwright/test';

// per-file config

test.use({ locale: 'fr-FR', timezoneId: 'Europe/Paris' });
test.skip()

test('should use euro', async ({ page }) => {/* ..test.. */ });

// per-suite config

test.describe('light theme', () => {
    test.use({ colorScheme: 'light' });

    test('should be light', async ({ page }) => {/* ..test.. */ });
})

test.describe('dark theme', () => {
    test.use({ colorScheme: 'dark' });

    test('should be dark', async ({ page }) => {/* ..test.. */ });
})
