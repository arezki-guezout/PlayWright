import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';
test.describe("scenario de connexion", () => {
let lp:LoginPage;

test.beforeEach("connexion a sauce demo", async ({page})=>{
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle(/Swag Labs/);
  lp = new LoginPage(page)
})

test('login to saucedemo', async ({ page })=>{
  await lp.saisirUserName("standard_user")
  await lp.saisirPassword("secret_sauce")
  await lp.cliquerBtn()
  await expect(page).toHaveURL(/inventory/)
})

test('login to saucedemo with error', async ({ page })=>{
  await lp.saisirUserName("standard_user_incorrect")
  await lp.saisirPassword("secret_sauce")
  await lp.cliquerBtn()
  await expect(await lp.getErrorMsg()).toBeVisible()
})
})
