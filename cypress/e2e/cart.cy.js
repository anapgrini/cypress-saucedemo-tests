
describe('SauceDemo - Shopping Cart Tests', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Should add a product to the cart successfully', () => {

    // Add backpack to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Verify cart badge
    cy.get('[data-test="shopping-cart-badge"]')
      .should('have.text', '1')

    // Open cart
    cy.get('[data-test="shopping-cart-link"]').click()

    // Verify product
    cy.get('[data-test="inventory-item-name"]')
      .should('contain', 'Sauce Labs Backpack')

    // Verify quantity
    cy.get('[data-test="item-quantity"]')
      .should('have.text', '1')

  })

})
