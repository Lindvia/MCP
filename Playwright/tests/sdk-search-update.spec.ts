import { test, expect } from '@playwright/test';

test('Search MCP Documentation and verify TypeScript SDK redirection', async ({ page }) => {
  // Navigate to the introduction page
  await page.goto('https://modelcontextprotocol.io/introduction');

  // Click TypeScript SDK link in the sidebar
  await page.getByRole('link', { name: 'TypeScript SDK' }).click();
  const newTabPromise = page.waitForEvent("popup");
  
  // Verify the URL after redirection
  const newTab = await newTabPromise;
  await newTab.waitForLoadState();
  await expect(newTab).toHaveURL('https://github.com/modelcontextprotocol/typescript-sdk');

});