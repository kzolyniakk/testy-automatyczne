import Home from "../pages/Home";
import base from "../pages/base";
import shop from "../pages/shop";

describe('Testowanie podstrony SHOP', () => {

    it('Przejście na stronę główną', () => {
        base.openHomePage();
    });

    it('Przejście do sklepu', () => {
        Home.clickShopTab();
        cy.url().should('include', 'https://test.testowanie-oprogramowania.pl/shop/');
    });

    it('Kliknięcie filtru "Postcards"', () => {
        shop.clickFilterPostcards();
        cy.get('[class="products columns-3"]').should('contain', 'Postcard').and('not.contain', 'Poster');
    })

    it('Kliknięcie filtru "Posters"', () => {
        shop.clickFilterPosters();
        cy.get('[class="products columns-3"]').should('not.contain', 'Postcard').and('contain', 'Poster');
    })

    it('Sprawdzenie textArea - brak produktów', () => {
        shop.textArea.type('kadskskada{enter}');
        shop.textArea.clear();
        cy.get('.woocommerce-no-products-found').should('be.visible');
    })

    it('Sprawdzenie textArea - POSTER', () => {
        shop.textArea.type('poster{enter}');
        shop.textArea.clear();
        cy.get('[class="products columns-3"]').should('not.contain', 'Postcard').and('contain', 'Poster');
    })

    it('Test suwaka ceny minimalnej', () => {
        cy.get('[aria-label="Filtruj wg minimalnej ceny"]').invoke('attr', 'aria-valuetext', '14');
    })
})