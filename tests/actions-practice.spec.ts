import{test, expect} from '@playwright/test';
test('Search book on Amazon india website', async ({page}) => {

    await page.goto('https://www.amazon.in');
    await page.getByLabel('Search Amazon.in').fill('Playwright Book');
    await page.getByLabel('Search Amazon.in').press('Enter');
    await expect(page).toHaveTitle(/Amazon/);




});