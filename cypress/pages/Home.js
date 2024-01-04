class Home {
    
    get ShopTab() {
        return cy.get('#menu-item-1344 > a');
    }
    
    clickShopTab() {
        this.ShopTab.click();
    }
}

export default new Home ();