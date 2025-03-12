import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';

test('login to saucedemo', async ({ page })=>{
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle(/Swag Labs/);
  const lp:LoginPage = new LoginPage(page)
  await lp.saisirUserName("standard_user")
  await lp.saisirPassword("secret_sauce")
  await lp.cliquerBtn()
  await expect(page).toHaveURL(/inventory/)
})

test('login to saucedemo with error', async ({ page })=>{
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle(/Swag Labs/);
  const lp:LoginPage=new LoginPage(page)
  await lp.saisirUserName("standard_user_incorrect")
  await lp.saisirPassword("secret_sauce")
  await lp.cliquerBtn()
  await expect(await lp.getErrorMsg()).toBeVisible()
})
