import {test, expect} from '@playwright/test';
test ('get by locator practice test', async ({page}) => {
await page.goto('https://playwright.dev/');
const testingDocument = page.getByRole('link', {name: 'Testing documentation'});
await expect(testingDocument).toBeVisible();
await testingDocument.click();
await expect (page.getByRole('heading', { name: 'Installation'})).toBeVisible();
}

)