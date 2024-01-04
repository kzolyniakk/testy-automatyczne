class base {
    openHomePage() {
        cy.visit('https://test.testowanie-oprogramowania.pl/');
    }
}
export default new base();
