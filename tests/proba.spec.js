const playwright = require('playwright');
    async function main() {
        const browser = await playwright.chromium.launch({
            headless: true // set this to true
        });
        
        const page = await browser.newPage();
        await page.goto('https://www.lohika.com/clients');
        const market = await page.$eval('.all-clients__wrapper', headerElm => {
            const data = [];
            const listElms = headerElm.getElementsByTagName('li');
            listElms.forEach(elm => {
                data.push(elm.innerText.split('\n'));
            });
            return data;
        });
        
        console.log('Market Composites--->>>>', market);
        await page.waitForTimeout(5000); // wait
        await browser.close();
    }
    
    main();