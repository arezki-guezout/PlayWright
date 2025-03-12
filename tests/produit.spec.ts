import { expect, test } from "@playwright/test";
import ProductPage from "../pages/produit.page";
import LoginPage from "../pages/login.page";

test('ajouter un produit', async({ page }) => {
        await page.goto("https://www.saucedemo.com/");
        await expect(page).toHaveTitle(/Swag Labs/);
        const lp:LoginPage = new LoginPage(page)
        await lp.saisirUserName("standard_user")
        await lp.saisirPassword("secret_sauce")
        await lp.cliquerBtn()
        const pp: ProductPage = new ProductPage(page);
        await pp.ajouterProduit();
        await expect(await pp.getBadge()).toBeVisible();
        await pp.supprimerProduit();
        await expect(await pp.getBadge()).not.toBeVisible();

    })