
describe('SauceDemo - Login Tests', () => {

  it('Should display an error message for invalid credentials', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senha123')

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match')

    cy.url().should('not.include', '/inventory.html')

  })

  it('Should login successfully with valid credentials', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')

    cy.get('.inventory_list').should('be.visible')

  })

})
