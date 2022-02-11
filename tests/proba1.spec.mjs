import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.lohika.com/clients
  await page.goto('https://www.lohika.com/clients');
  console.log(page.getAttribute('href='))
  /*const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('body > main > section > div > div > div:nth-child(1) > a > img')
    page.getAttribute
  ]);*/
  //for (let i = 0; i < 20; i++) {
  //await target.nth(i).click();
    
  //}

});