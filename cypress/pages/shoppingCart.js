class shoppingCart {

    get redeemCouponTab () {
        return cy.get('button[value="Wykorzystaj kupon"]');
    }

    clickRedeemCouponTab () {
        this.redeemCouponTab.click();
    }

    get proceedToPaymentTab () {
        return cy.get('#post-998 a[class="checkout-button button alt wc-forward"]');
    }

    clickProceedToPaymentTab () {
        this.proceedToPaymentTab.click();
    }

    get backToShopTab () {
        return cy.get('a[class="button wc-backward"]');
    }

    clickBackToShopTab () {
        this.backToShopTab.click();
    }
}

export default new shoppingCart;