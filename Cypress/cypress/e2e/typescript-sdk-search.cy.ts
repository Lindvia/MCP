describe('MCP TypeScript SDK Search', () => {
  it('should search for TypeScript SDK and verify redirection', () => {
    // Visit the introduction page
    cy.visit('https://modelcontextprotocol.io/introduction')
    
    // Click search button (using the appropriate selector for Docusaurus search)
    cy.get('button.DocSearch-Button').click()
    cy.get('#docsearch-input').type('Typescript SDK')    // Click on the TypeScript SDK link in search results
    cy.get('.DocSearch-Hit-title').contains('TypeScript SDK').click()

    // Wait for navigation and verify URL (without using origin)
    cy.url().should('include', 'github.com/modelcontextprotocol/typescript-sdk')
  })
})
