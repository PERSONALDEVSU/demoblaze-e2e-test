class CheckoutPage {
  startCheckout() {
    cy.get('[data-test="checkout"]').click()
  }

  fillInformation(first, last, zip) {
    cy.get('[data-test="firstName"]').type(first)
    cy.get('[data-test="lastName"]').type(last)
    cy.get('[data-test="postalCode"]').type(zip)
    cy.get('[data-test="continue"]').click()
  }

  finishOrder() {
    cy.get('[data-test="finish"]').click()
  }

  validateOrder() {
    cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible')
  }
}

export default CheckoutPage