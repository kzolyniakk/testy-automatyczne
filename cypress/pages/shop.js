class shop {

    get addPostcardV1Tab () {
        return cy.get('a[data-quantity="1"][data-product_id="1132"] span.ahfb-svg-iconset');
    }

    clickAddPostcardV1Tab () {
        this.addPostcardV1Tab.click({force:true});
    }

    get shoppingCartSign() {
        return cy.get('div[class="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container"] div.ast-addon-cart-wrap');
    }

    clickShoppingCartSign () {
        this.shoppingCartSign.click();
    }

    get filterPostcards () {
        return cy.get('li:nth-child(1) [class="wc-block-product-categories-list-item__name"]');
    }

    clickFilterPostcards () {
        this.filterPostcards.click();
    }

    get filterPosters () {
        return cy.get('li:nth-child(2) [class="wc-block-product-categories-list-item__name"]');
    }

    clickFilterPosters () {
        this.filterPosters.click();
    }

    get textArea () {
        return cy.get('#wp-block-search__input-1');
    }
}

export default new shop();