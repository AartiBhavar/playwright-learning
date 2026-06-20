import{test, expect} from '@playwright/test';
test('Google Search', async ({page}) => {
    await page.goto('https://www.google.com');
    await page.getByRole('combobox').fill("Playwright Automation");
    await page.keyboard.press('Enter');
    await expect(page).toHaveTitle(/Google/);
    
}




)
