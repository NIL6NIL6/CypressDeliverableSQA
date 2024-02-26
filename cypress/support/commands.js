// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('accessWebsite', () => {
    cy.clearCookies();
    cy.visit('https://sqademosatp.net/watch/');
});

Cypress.Commands.add('selectWatch', (product) => {
    cy.get('a')
      .contains(product)
      .click();
    cy.wait(1000);
});

Cypress.Commands.add('addToBasket', () => {
    cy.get('button')
      .contains('Add to Basket')
      .click();
    cy.wait(1000);
});

Cypress.Commands.add('addAmount', (quantity) => {
    cy.get('input')
      .get('.qty-inp-s')
      .type(quantity);
    cy.wait(1000);
});

Cypress.Commands.add('goToCart', () => {
    cy.get('a')
      .contains('Go to cart')
      .click();
    cy.wait(1000);
});

Cypress.Commands.add('assertCorrectQuantity', (quantity) => {
    cy.get('input')
      .get('.qty-inp-s')
      .should('have.value', quantity);
});

Cypress.Commands.add('proceedToPurchaseInformation', () => {
    cy.get('a')
      .get('.with-card')
      .click();
    cy.wait(1000);
});

Cypress.Commands.add('fillUserData', (userData) => {
    var shipping_fields = cy.get('input[id^=shipping_address]');
    shipping_fields.get('input[id$=firstname]:first')
      .type(userData.first_name);
    shipping_fields.get('input[id$=lastname]:first')
      .type(userData.last_name);
    shipping_fields.get('input[id$=street_address]:first')
      .type(userData.street_address);
    shipping_fields.get('input[id$=postcode]:first')
      .type(userData.post_code);
    shipping_fields.get('input[id$=city]:first')
      .type(userData.city);
    cy.get('input[id=checkout-email_address]:first')
      .type(userData.email_address);
});

Cypress.Commands.add('checkBoxes', () => {
    cy.get('span')
      .contains('Cash on Delivery')
      .click();
    cy.get('input[id=checkout-terms]')
      .click();
    cy.wait(1000);
});

Cypress.Commands.add('confirmPayment', () => {
    cy.get('button')
      .contains('Confirm and pay')
      .click();
});

Cypress.Commands.add('assertConfirmationPage', (confirmationMessage) => {
    cy.get('div[class*="text-2"]:first')
      .should('have.text', confirmationMessage);
});
