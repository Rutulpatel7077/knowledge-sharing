describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click();
    cy.get('#query-btn').click();
    cy.get('.example').click();
    cy.get(':nth-child(3) > .col-xs-7 > pre > .javascript > :nth-child(1)').click();
    cy.get(':nth-child(3) > .col-xs-7 > pre > .javascript > .hljs-comment').click();
    /* ==== End Cypress Studio ==== */
  })
})