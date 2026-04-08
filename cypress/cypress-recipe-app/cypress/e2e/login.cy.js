describe('login test', () => {
  it('login', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.recipeHeader').should('be.visible')
    cy.contains('Recipe')
  })
})