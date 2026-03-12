describe('Flujo de compra Demoblaze', () => {

  it('Debe realizar un flujo completo de compra', () => {

    cy.visit('https://www.demoblaze.com')

    // Producto 1
    cy.contains('Samsung galaxy s6')
    .should('be.visible')
    .click()
    //*[@id="tbodyid"]/div[1]/div/div/h4/a
    cy.contains('Add to cart').click()
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added')
    })

    cy.visit('https://www.demoblaze.com')

    // Producto 2
    cy.contains('Nokia lumia 1520').click()
    cy.contains('Add to cart').click()

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added')
    })

    // Ver carrito
    cy.contains('Cart').click()

    // Validar productos
    cy.contains('Samsung galaxy s6')
    cy.contains('Nokia lumia 1520')

    // Place Order
    cy.contains('Place Order').click()

    // Completar formulario
    cy.get('#name').type('QA Test')
    cy.get('#country').type('Ecuador')
    cy.get('#city').type('Quito')
    cy.get('#card').type('123456789')
    cy.get('#month').type('12')
    cy.get('#year').type('2026')

    cy.contains('Purchase').click()

    // Validar compra exitosa
    cy.contains('Thank you for your purchase!')

  })

})