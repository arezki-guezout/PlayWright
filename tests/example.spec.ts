import { test, expect } from '@playwright/test';

test('login to saucedemo', async ({ page })=>{
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle(/Swag Labs/);
  await page.locator("#user-name").fill("standard_user")
  await page.locator("#password").fill("secret_sauce")
  await page.locator("#login-button").click()
  await expect(page).toHaveURL(/inventory/)
})

test('login to saucedemo with error', async ({ page })=>{
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle(/Swag Labs/);
  await page.locator("#user-name").fill("standard_user_incorrect")
  await page.locator("#password").fill("secret_sauce")
  await page.locator("#login-button").click()
  await expect(page.locator("h3[data-test=error]")).toBeVisible()
})
