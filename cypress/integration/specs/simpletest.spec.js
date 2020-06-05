/// <reference types="cypress" />

context('Actions', () => {
  // https://on.cypress.io/interacting-with-elements

  it('.should() - high temp should be in red', () => {
    cy.visit('http://localhost:3006')
    cy.get('span.test-unsafeTemp').first()
      .should('have.css', 'color', 'rgb(255, 0, 0)')
})
})

