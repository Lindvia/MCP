import { test, expect } from '@playwright/test';

test('Search MCP Documentation and verify TypeScript SDK redirection', async ({ page }) => {
  // Navigate to the introduction page
  await page.goto('https://modelcontextprotocol.io/introduction');
  
  // Wait for the search button and click it
  await page.getByRole('button', { name: 'Search' }).click();
  
  // Type the search term
  await page.getByPlaceholder('Search documentation...').fill('Typescript SDK');
  
  // Wait for search results and click the TypeScript SDK link
  await page.getByRole('link', { name: 'TypeScript SDK', exact: true }).click();
  
  // Verify the URL after redirection
  await expect(page).toHaveURL('https://github.com/modelcontextprotocol/typescript-sdk');
});
