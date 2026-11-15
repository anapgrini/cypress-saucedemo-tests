
describe('SauceDemo - Checkout Tests', () => {

  // Executa o login antes de cada teste
 
beforeEach(() => {
    cy.login()
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
  })

  // TESTE 1 - Preço na loja
  it('Should display the correct product price', () => {

    cy.get('[data-test="inventory-item-price"]')
      .first()
      .should('have.text', '$29.99')

  })

  // TESTE 2 - Preço no carrinho
  it('Should keep the same product price in the cart', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    cy.get('[data-test="shopping-cart-link"]').click()

    cy.get('[data-test="inventory-item-name"]')
      .should('contain', 'Sauce Labs Backpack')

    cy.get('[data-test="inventory-item-price"]')
      .should('have.text', '$29.99')

  })

  // TESTE 3 - Preço no checkout
  it('Should display the correct price at checkout', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Ana')
    cy.get('[data-test="lastName"]').type('Teste')
    cy.get('[data-test="postalCode"]').type('30100000')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="inventory-item-name"]')
      .should('contain', 'Sauce Labs Backpack')

    cy.get('[data-test="inventory-item-price"]')
      .should('have.text', '$29.99')

    cy.get('[data-test="subtotal-label"]')
      .should('contain', '$29.99')

  })

  // TESTE 4 - Cálculo do total
  it('Should calculate the correct checkout total', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Ana')
    cy.get('[data-test="lastName"]').type('Teste')
    cy.get('[data-test="postalCode"]').type('30100000')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="subtotal-label"]')
      .invoke('text')
      .then((subtotalTexto) => {

        const subtotal = Number(
          subtotalTexto.replace('Item total: $', '')
        )

        cy.get('[data-test="tax-label"]')
          .invoke('text')
          .then((taxTexto) => {

            const tax = Number(
              taxTexto.replace('Tax: $', '')
            )

            cy.get('[data-test="total-label"]')
              .invoke('text')
              .then((totalTexto) => {

                const total = Number(
                  totalTexto.replace('Total: $', '')
                )

                const esperado = Math.round((subtotal + tax) * 100)
                const recebido = Math.round(total * 100)

                expect(recebido).to.equal(esperado)

              })
          })
      })

  })

  // TESTE 5 - Compra finalizada
  it('Should complete checkout successfully', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Ana')
    cy.get('[data-test="lastName"]').type('Teste')
    cy.get('[data-test="postalCode"]').type('30100000')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="finish"]').click()

    cy.get('[data-test="complete-header"]')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!')

    cy.url()
      .should('include', '/checkout-complete.html')

  })

})
