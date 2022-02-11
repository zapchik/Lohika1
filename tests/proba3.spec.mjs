import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.lohika.com/clients
  await page.goto('https://www.lohika.com/clients');
  let res = {};
  const arrelement = [];
  const xpathData = await page.$eval('//*[@id="lohika-html"]/body/main/section/div/div', 
            navElm => {
                let refs = []
                let atags = navElm.getElementsByTagName("a");
                for (let item of atags) {
                    refs.push(item.href);
                }
                return refs;
            });
//            console.log('StackOverflow Links', xpathData);

  // Close page
  await page.close();
  for (let index = 0; index < xpathData.length; index++) {
      //let template = ['https://' ,'www.']
      //let arrelement = [];
      let element = xpathData[index];
      element = element.split('https://').join('');
      element = element.split('www.').join('');
      element = element.split('http://').join('');
      element = element.split('.com/').join('');
      element = element.split('lohikaclient-work/').join('');
      element = element.split('.ie/').join('');
      element = element.split('.inc/').join('');
      element = element.split('.co/').join('');
      element = element.split('.net/').join('');
      element = element.split('.ai/').join('');
      element = element.split('.com.ua/').join('');
      element = element.split('.rest/').join('');
      element = element.split('.my/').join('');
      element = element.split('.org/').join('');
      element = element.split('.tech/').join('');
      element = element.split('.io/').join('');
      element = element.split('/').join('');
      element = element.split('home.').join('');
      element = element.split('corporateacquisitionsgrapeshot').join('');
      arrelement.push(element)
      //console.log(element);  
      //console.log(template);
      
  }
  for (let index = 0; index < xpathData.length; index++) {
       res[arrelement[index]] = xpathData[index]
  }
  console.log(res)
//*[@id="lohika-html"]/body/main/section/div/div/div[1]
//*[@id="lohika-html"]/body/main/section/div/div
});