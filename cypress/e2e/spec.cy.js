/// <reference types="Cypress"/>
/*describe('template spec', () => {
  it('test inicial de ejemplo', () => {
    cy.visit('https://example.cypress.io');
    cy.get('h1').contains("Kitchen Sink");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
  })
})*/

describe('deliverable spec', () => {
  it('TEST CASE 1', () => {
    cy.fixture('exercice')
      .its('products')
      .then(products => {
        products.forEach(product => {
          cy.accessWebsite();
          cy.selectWatch(product.name);
          cy.addToBasket();
          cy.addAmount(product.quantity);
          cy.goToCart();
          cy.assertCorrectQuantity(product.quantity);
          cy.proceedToPurchaseInformation();
          cy.fixture('exercice')
            .its('user')
            .then(user => {
              cy.fillUserData(user);
            })
          cy.checkBoxes();
          cy.confirmPayment();
          cy.assertConfirmationPage(product.message);
        });
      });
  });
});
