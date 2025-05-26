describe('MCP TypeScript SDK Search', () => {
  it('should search for TypeScript SDK and verify redirection', () => {
    // Visit the introduction page
    cy.viewport(1800,1000)
    cy.visit('https://modelcontextprotocol.io/introduction')
    
    // Click on the TypeScript SDK link in the introduction page
    cy.contains('a', 'TypeScript SDK').first()
      .invoke('removeAttr', 'target')
      .click()

    // Handle the cross-origin navigation to GitHub
    cy.origin('https://github.com', () => {
      // Verify we're on the correct GitHub page
    cy.url().should('eq', 'https://github.com/modelcontextprotocol/typescript-sdk')
    })
  })
})