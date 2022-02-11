import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.lohika.com/clients
  await page.goto('https://www.lohika.com/clients');
  const xpathData = await page.$eval('//*[@id="lohika-html"]/body/main/section/div/div', 
            navElm => {
                let refs = []
                let atags = navElm.getElementsByTagName("img");
                for (let item of atags) {
                    refs.push(item.alt);
                }
                return refs;
            });
            /*const allList = await page.$$('alt', selected => {
              let data = []
              selected.forEach((item) => {
                  data.push(item.innerText)
                  //console.log(data);
              });
              return data;
          });*/
            console.log('StackOverflow Links', xpathData);
            //console.log(allList);
  // Close page
  await page.close();
//*[@id="lohika-html"]/body/main/section/div/div/div[1]
//*[@id="lohika-html"]/body/main/section/div/div
});