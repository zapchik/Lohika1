import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.lohika.com/about-us
  await page.goto('https://www.lohika.com/about-us');

  // Click .about-us-clients-item div:nth-child(2) .about-us-client__image img
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('.about-us-clients-item div:nth-child(2) .about-us-client__image img')
  ]);

  // Click text=Adobe
  await page1.click('text=Adobe');
  await expect(page1).toHaveURL('https://www.adobe.com/#logo');

  // Close page
  await page1.close();

  // Click .about-us-clients-item div:nth-child(3) .about-us-client__image img
  await page.click('.about-us-clients-item div:nth-child(3) .about-us-client__image img');
  await expect(page).toHaveURL('https://www.lohika.com/client-work/twilio');

  // Go to https://www.lohika.com/about-us
  await page.goto('https://www.lohika.com/about-us');

  // Click .slick-track div:nth-child(2) div .about-us-clients-item div:nth-child(2) .about-us-client__image img
  const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('.slick-track div:nth-child(2) div .about-us-clients-item div:nth-child(2) .about-us-client__image img')
  ]);

  // Click svg
  await page2.click('svg');
  await expect(page2).toHaveURL('https://asana.com/?noredirect');

  // Go to https://asana.com/
  await page2.goto('https://asana.com/');

  // Click text=Previous Next >> a
  const [page3] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text=Previous Next >> a')
  ]);

  // Click .slick-track div:nth-child(2) div .about-us-clients-item div .about-us-client__image img
  await page.click('.slick-track div:nth-child(2) div .about-us-clients-item div .about-us-client__image img');
  await expect(page).toHaveURL('https://www.lohika.com/client-work/okta');

  // Close page
  await page3.close();

  // Close page
  await page2.close();

  // Go to https://www.lohika.com/about-us
  await page.goto('https://www.lohika.com/about-us');

  // Click [aria-label="Close\ Drift\ Widget\ messenger\ preview\ overlay"]
  await page.frame({
    url: 'https://js.driftt.com/core?embedId=2y8xchknh2y3&region=US&forceShow=false&skipCampaigns=false&sessionId=55585307-6235-4305-bda3-0d36cd169b5f&sessionStarted=1644407514.246&campaignRefreshToken=0f5a7b79-7019-47d1-92d8-a88017d5f05f&hideController=false&pageLoadStartTime=1644407908582&mode=CHAT&driftEnableLog=false'
  }).click('[aria-label="Close\\ Drift\\ Widget\\ messenger\\ preview\\ overlay"]');

  // Click text=Previous Next >> div div div >> :nth-match(div, 3)
  const [page4] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text=Previous Next >> div div div >> :nth-match(div, 3)')
  ]);

  // Click text=Pinterest
  await page4.click('text=Pinterest');

});