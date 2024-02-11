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
    // Purchase Information
    const first_name = 'John';
    const last_name = 'Doe';
    const street_address = 'Jordi Girona, 1';
    const post_code = '08034';
    const city = 'Barcelona';
    const email_address = 'john.doe@gmail.com';
    // Define Test Differences
    const input_values = [
      ['Royal London 41003-03', '2', 'We\'ve received your order'], // Test 1
      ['Citizen Eco-Drive Silver Tone Men', '3', 'We\'ve received your order'], // Test 2
      ['Royal London 41003-03', '2', 'Your order has processed'] // Test 3
    ];
    input_values.forEach(([product, quantity, completion]) => {
      // Access Website As Clean Slate
      cy.clearCookies();
      cy.visit('https://sqademosatp.net/watch/');
      // Select Correct Watch
      cy.get('a')
        .contains(product)
        .click();
      cy.wait(1000);
      // Add Watch To Basket
      cy.get('button')
        .contains('Add to Basket')
        .click();
      cy.wait(1000);
      // Set Desired Amount & Add To Cart
      cy.get('input')
        .get('.qty-inp-s')
        .type(quantity);
      cy.wait(1000);
      cy.get('a')
        .contains('Go to cart')
        .click();
      cy.wait(1000);
      // Assert Input Info Is Correct
      cy.get('input')
        .get('.qty-inp-s')
        .should('have.value', quantity);
      cy.get('a')
        .get('.with-card')
        .click();
      cy.wait(1000);
      // Enter Purchase Information
      var shipping_fields = cy.get('input[id^=shipping_address]');
      shipping_fields.get('input[id$=firstname]:first')
        .type(first_name);
      shipping_fields.get('input[id$=lastname]:first')
        .type(last_name);
      shipping_fields.get('input[id$=street_address]:first')
        .type(street_address);
      shipping_fields.get('input[id$=postcode]:first')
        .type(post_code);
      shipping_fields.get('input[id$=city]:first')
        .type(city);
      cy.get('input[id=checkout-email_address]:first')
        .type(email_address);
      // Check Correct Boxes
      cy.get('span')
        .contains('Cash on Delivery')
        .click();
      cy.get('input[id=checkout-terms]')
        .click();
      cy.wait(1000);
      // Confirm And Pay
      cy.get('button')
        .contains('Confirm and pay')
        .click();
      // Assert Confirmation Page
      //cy.screenshot();
      cy.get('div[class*="text-2"]:first')
        .should('have.text', completion);
    });
  })
})