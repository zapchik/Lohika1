import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Go to http://localhost:3000/signin
  await page.goto('http://localhost:3000/signin');

  // Click :nth-match(path, 2)
  await page.click(':nth-match(path, 2)');

  // Click text=Sign in
  await page.click('text=Sign in');

  // Click text=Username is required
  await page.click('text=Username is required');

  // Click input[name="username"]
  await page.click('input[name="username"]');

  // Click input[name="password"]
  await page.click('input[name="password"]');

  // Click input[name="password"]
  await page.click('input[name="password"]');

  // Click text=Remember me
  await page.click('text=Remember me');

  // Click text=Built by
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text=Built by')
  ]);

  // Close page
  await page1.close();

  // Close page
  await page.close();

});