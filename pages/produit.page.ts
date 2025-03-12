import { Page } from "@playwright/test";

class ProductPage{
    readonly page:Page
    constructor(page:Page){
        this.page=page
    }
    elements= {
        product: ()=> this.page.locator(".invetory_item"),
        addBtn: ()=> this.page.locator("#add-to-cart-sauce-labs-backpack"),
        nbProduct: ()=> this.page.locator("span.shopping_cart_badge"),
        rmBtn: ()=> this.page.locator("#remove-sauce-labs-backpack")
    }

    async ajouterProduit(){ await this.elements.addBtn().click()}
    async getBadge() { return this.elements.nbProduct()}
    async supprimerProduit(){ await this.elements.rmBtn().click()}
}

export default ProductPage;