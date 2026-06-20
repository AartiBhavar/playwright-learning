//test - create test case, expect - perform validation
import {test, expect} from '@playwright/test';
//test name - 'verify google page title, async - allows asynchronous operations, page - browser tab
test('Verify Google page title', async ({page}) => {
// page.goto is used to navigate to a web page
    await page.goto("https://www.google.com");
//verify page title contains google
    await expect(page).toHaveTitle(/Google/);

});