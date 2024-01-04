describe("Wyszukiwanie w google", () =>{
  
    it("Otwarcie strony google", () =>{
        cy.visit("https://google.com");
    });

    it("Znalezienie paska wyszukiwania", () =>{
        cy.get('#APjFqb').type("sport.pl{enter}");
    });

    it("Wybranie linku SPORT.PL", () => {
        cy.get('div.g div.tF2Cxc div.yuRUbf span[jscontroller="msmzHf"] a h3.LC20lb').click();
    })

})