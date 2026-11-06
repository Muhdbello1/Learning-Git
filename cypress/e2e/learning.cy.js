/// <reference types="cypress" />
describe('Account Registration', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })
 it('Should Login and add 4 items to cart and complete the purchase', () => {

    cy.fixture('learning.json').then((data) => {
   cy.get('[data-test="username"]').click().type(data.user_name);
   cy.get('[data-test="password"]').click().type(data.password);
   cy.get('[data-test="login-button"]').click();
   cy.wait(3000);
   cy.get('.inventory_item').eq(0).find('button').click();
    cy.wait(3000);
   cy.get('.inventory_item').eq(1).find('button').click();
   cy.wait(3000);
   cy.get('.inventory_item').eq(2).find('button').click();
   cy.wait(3000);
   cy.get('.inventory_item').eq(5).find('button').click();
   cy.wait(3000);
   cy.get('[data-test="shopping-cart-link"]').should('have.text', '4')
   cy.get('[data-test="shopping-cart-link"]').click();
   cy.contains('Your Cart').should('be.visible');
   cy.get('[data-test="checkout"]').click();
   cy.wait(3000);
   cy.get('[data-test="firstName"]').type(data.first_name);
   cy.wait(3000);
   cy.get('[data-test="lastName"]').type(data.last_name);
   cy.wait(3000);
   cy.get('[data-test="postalCode"]').type(data.postalCode);
   cy.wait(3000);
   cy.get('[data-test="continue"]').click();
   cy.url().should('include', 'https://www.saucedemo.com/checkout-step-two.html');
   cy.get('[data-test="finish"]').click();
   cy.get('[data-test="complete-header"]').should('exist').and('have.text', 'Thank you for your order!'); 
    })
  
})
  })