import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //let array = [];
  await page.goto ('https://www.lohika.com/clients');
  //const target = page.locator('//*[@id="lohika-html"]/body/main/section/div/div/div[1]');
  //for (let i = 0; i < 20; i++) {
  //  const element = i;
  //  setTimeout(2000);
    //setTimeout(() => {console.log(target.nth(i).innerText());}, 2000)
    console.log(page.innerText('.all-clients__item-overlay'));
  //}

});
  
