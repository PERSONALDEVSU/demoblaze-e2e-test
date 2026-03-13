class InventoryPage {

  addBackpack(){
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  }

  addBikeLight(){
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
  }

  goToCart(){
    cy.get('.shopping_cart_link').click()
  }

}

export default InventoryPage