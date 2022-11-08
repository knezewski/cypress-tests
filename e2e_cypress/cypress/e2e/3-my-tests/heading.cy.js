describe('Heading test', () => {
  it('contains correct titles', () => {
    cy.visit('http://localhost:3000/example-1')

    cy.get('h1').invoke('text').should('equal', 'My Awesome Web Application')
  })
})
