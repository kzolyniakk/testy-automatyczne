class shoppingCartPreview {

    get viewCartTab() {
        return cy.get('div#astra-mobile-cart-drawer a[class="button wc-forward"]');
    }

    clickViewCartTab () {
        this.viewCartTab.click();
    }
}

export default new shoppingCartPreview();