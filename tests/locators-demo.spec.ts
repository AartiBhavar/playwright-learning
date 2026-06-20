import {test, expect} from '@playwright/test';
test('Locators demo', async ({page}) => {
    await page.goto("https:/playwright.dev/");
    const getStartedLink = page.getByRole('link', {name: 'Get Started'});
    await expect(getStartedLink).toBeVisible();
    await getStartedLink.click();
    await expect (page.getByRole('heading', { name: 'Installation'})).toBeVisible();




}

)