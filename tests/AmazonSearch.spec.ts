import{test, expect} from '@playwright/test';
test("Amazon Search Functionality", async ({page}) =>{
    await page.goto('https://www.amazon.in');

    await page.getByRole('searchbox', { name: 'Search Amazon.in'}).fill('playstation5');
    await page.getByRole('button', {name: 'GO'});



}
);