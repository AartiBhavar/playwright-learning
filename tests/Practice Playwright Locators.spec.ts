import { test, expect } from '@playwright/test';

test('Practice Playwright Locators', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  // getByRole
  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toBeVisible();

  // getByText
  await expect(
    page.getByText('Get started')
  ).toBeVisible();

  // getByRole + click
  await page.getByRole('link', { name: 'Get started' }).click();

  // Verify heading
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();

});