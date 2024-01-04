import base from "../pages/base";
import Home from "../pages/Home";
import shop from "../pages/shop";
import shoppingCartPreview from "../pages/shoppingCartPreview";
import shoppingCart from "../pages/shoppingCart";

describe('Dodawanie produktu do koszyka i jego testowanie', () => {
    
    it('Przejeście na stronę sklepu', () => {
        base.openHomePage();
    })

    it('Przejście do zakładki SHOP', () => {
        Home.clickShopTab();
        cy.url().should('include', 'https://test.testowanie-oprogramowania.pl/shop/');
        cy.wait(2000);
    })

   it('Dodanie produktu do koszyka', () => {
        shop.clickAddPostcardV1Tab();
        cy.get('div#astra-mobile-cart-drawer ul[class="woocommerce-mini-cart cart_list product_list_widget "]').should('contain', 'Postcard V1');
        cy.wait(2000);
    })

    it('Otwarcie podglądu koszyka', () => {
        shop.clickShoppingCartSign();
        cy.get('#astra-mobile-cart-drawer').should('be.visible');
        cy.wait(2000);
    })

    it("Przejście do koszyka", () => {
        shoppingCartPreview.clickViewCartTab();
        cy.url().should('include', 'https://test.testowanie-oprogramowania.pl/cart/');
        cy.wait(2000);
    })

    it("Zwiększenie ilości produktu", () => {
        cy.get('a#plus_qty').click();
        cy.get('div[class="quantity buttons_added"] input').should('have.value', '2');
        cy.wait(2000);
    })

    it("Zmniejszenie ilości produktu", () => {
        cy.get('a#minus_qty').click();
        cy.get('div[class="quantity buttons_added"] input').should('have.value', '1');
        cy.wait(2000);
    })
        
    it("Wciśnięcie klawisza wykorzystaj kupon", () => {
        shoppingCart.clickRedeemCouponTab();
        cy.get("ul.woocommerce-error li").should("be.visible");
        cy.wait(2000);
    })

    it("Przejście do płatności", () => {
        shoppingCart.clickProceedToPaymentTab();
        cy.wait(2000);
        cy.url().should('include', 'https://test.testowanie-oprogramowania.pl/checkout/');
        cy.go('back');
    })

    it("Usunięcie wybranego produktu z koszyka", () => {
        cy.get('a svg[class="ast-mobile-svg ast-close-svg"]').click();
        cy.get('[class="woocommerce-message"]').should('contain', 'Usunięto: „Postcard V1”')
        cy.wait(2000);
    })

    it("Kliknięcie przycisku WRÓĆ DO SKLEPU", () => {
        shoppingCart.clickBackToShopTab();
        cy.url().should('include', 'https://test.testowanie-oprogramowania.pl/shop/')
        cy.wait(2000);
    })
})