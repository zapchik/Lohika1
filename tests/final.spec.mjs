import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.lohika.com/clients');
  let res = {};
  const arrelement = [];
  const grabLinks = await page.$eval('//*[@id="lohika-html"]/body/main/section/div/div', 
    navElm => {
        let refs = []
        let atags = navElm.getElementsByTagName("a");
            for (let item of atags) {
                    refs.push(item.href);
                }
                return refs;
            });
  const grabNames = await page.$eval('//*[@id="lohika-html"]/body/main/section/div/div', 
    navElm => {
        let refs = []
        let atags = navElm.getElementsByTagName("img");
            for (let item of atags) {
                    refs.push(item.alt);
                }
                return refs;
            });
  for (let index = 0; index < grabLinks.length; index++) {
    res[grabNames[index]] = grabLinks[index]

      
  }
  console.log(res)
})            