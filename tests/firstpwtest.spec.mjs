import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Go to http://localhost:3000/signin
  await page.goto('http://localhost:3000/signin');
  expect(page).toHaveTitle('Cypress Real World App');
  expect(page.locator('//*[@id="root"]/div/main/div[1]/h1')).toHaveText('Sign in');
  
  // Click [data-test="signup"]
  await page.click('[data-test="signup"]');

  // Click [data-test="signup"]
  await page.click('[data-test="signup"]');
  await expect(page).toHaveURL('http://localhost:3000/signup');
  expect(page).toHaveTitle('Cypress Real World App');

  // Fill input[name="firstName"]
  await page.fill('input[name="firstName"]', 'Evgen');

  // Click input[name="lastName"]
  await page.click('input[name="lastName"]');

  // Fill input[name="lastName"]
  await page.fill('input[name="lastName"]', 'Toporovsky');

  // Click input[name="username"]
  await page.click('input[name="username"]');

  // Fill input[name="username"]
  await page.fill('input[name="username"]', 'Evgen77');

  // Click input[name="password"]
  await page.click('input[name="password"]');

  // Fill input[name="password"]
  await page.fill('input[name="password"]', '1234567890');

  // Click input[name="confirmPassword"]
  await page.click('input[name="confirmPassword"]');

  // Fill input[name="confirmPassword"]
  await page.fill('input[name="confirmPassword"]', '1234567890');

  // Click [data-test="signup-submit"]
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/signin' }*/),
    page.click('[data-test="signup-submit"]')
  ]);

});