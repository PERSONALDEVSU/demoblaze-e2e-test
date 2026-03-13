describe('SauceDemo Purchase Flow', () => {

  it('Should complete purchase successfully', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').should('be.visible').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include','inventory')

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    cy.get('.shopping_cart_badge').should('contain','2')

    cy.get('.shopping_cart_link').click()

    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('QA')
    cy.get('[data-test="lastName"]').type('Automation')
    cy.get('[data-test="postalCode"]').type('170101')

    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()

   cy.get('.complete-header')
  .should('contain','Thank you for your order')

  })

})