describe("Selector mismatch", () => {
    it("loads page and click a tag", () => {
      cy.visit('/race-condition');
      setTimeout(() => {
        cy.get('a').contains('Vehicles').click();
      }, 2000);
      cy.url().should('include', '/vehicles');
    });
  });