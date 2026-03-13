Cypress.on('uncaught:exception', () => {
  return false
})

describe('OpenCart Purchase Flow', () => {

  it('Should complete purchase as guest', () => {

    cy.visit('https://opencart.abstracta.us/', {
  timeout: 120000,
  failOnStatusCode: false
})

    cy.get('.product-thumb', { timeout: 20000 }).should('be.visible')

    cy.get('.product-thumb button[onclick*="cart.add"]').eq(0).click()
    cy.get('.product-thumb button[onclick*="cart.add"]').eq(1).click()

    cy.wait(1000)

   cy.get('#cart').click()

cy.contains('View Cart')
  .should('be.visible')
  .click()

cy.url().should('include', 'checkout/cart')

// VALIDACIÓN PARA EVITAR QUE CYRESS SE QUEDE ESPERANDO EL LOAD
cy.get('.table-responsive', { timeout: 20000 }).should('be.visible')

    cy.contains('Checkout').click()

    cy.contains('Checkout Options', { timeout: 10000 }).should('be.visible')

    cy.get('input[value="guest"]').should('be.visible').check()

    cy.get('#button-account').click()

    cy.get('#input-payment-firstname').type('QA')
    cy.get('#input-payment-lastname').type('Automation')
    cy.get('#input-payment-email').type('qa@test.com')
    cy.get('#input-payment-telephone').type('12345678')

    cy.get('#input-payment-address-1').type('Test Street')
    cy.get('#input-payment-city').type('QACity')
    cy.get('#input-payment-postcode').type('170101')

    cy.get('#input-payment-country').select('Ecuador')
    cy.get('#input-payment-zone').select(1)

    cy.get('#button-guest').click()

    cy.get('#button-shipping-method').click()

    cy.get('input[name="agree"]').check()
    cy.get('#button-payment-method').click()

    cy.get('#button-confirm').click()

    cy.contains('Your order has been placed').should('be.visible')

  })

})