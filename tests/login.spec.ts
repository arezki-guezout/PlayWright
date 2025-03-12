import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';
test.describe("scenario de connexion", () => {
let lp:LoginPage;

const users = parse(fs.readFileSync(path.join(__dirname, 'input.csv')), {
  columns: true,
  skip_empty_lines: true
});


test('login to saucedemo', {tag: '@smoke',}, async ({ page })=>{
  for (const user of users ){
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle(/Swag Labs/);
    lp = new LoginPage(page)
    await lp.saisirUserName(user.username)
    await lp.saisirPassword(user.pass)
    await lp.cliquerBtn()
    if(user.result === "right" )
      await expect(page).toHaveURL(/inventory/)
    else
      await expect(await lp.getErrorMsg()).toBeVisible()
  }
})
})
