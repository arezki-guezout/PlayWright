import { expect, test } from "@playwright/test";
import ProductPage from "../pages/produit.page";
import LoginPage from "../pages/login.page";

test.describe("Ajout et suppression de produit", ()=>{
    let lp:LoginPage
    let pp:ProductPage
    
    test.beforeEach("Connexion a sauce demo", async ({page})=>{
        await page.goto("https://www.saucedemo.com/");
        await expect(page).toHaveTitle(/Swag Labs/);
        lp = new LoginPage(page)
        await lp.saisirUserName("standard_user")
        await lp.saisirPassword("secret_sauce")
        await lp.cliquerBtn()
    })

    test('ajouter un produit', async({ page }) => {
        pp= new ProductPage(page);
        await pp.ajouterProduit();
        await expect(await pp.getBadge()).toBeVisible();
        await pp.supprimerProduit();
        await expect(await pp.getBadge()).not.toBeVisible();
    })
})