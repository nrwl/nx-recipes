import { test, expect } from '@playwright/test';

test('can increment & decrement', async ({ page }) => {
  await page.goto('/');
  const count = page.locator('[data-testid="count"]');
  const increment = page.locator('[data-testid="increment"]');
  const decrement = page.locator('[data-testid="decrement"]');

  await expect(count).toHaveText('0');
  await increment.click();
  await expect(count).toHaveText('2');
  await decrement.click();
  await decrement.click();
  await expect(count).toHaveText('-2');
});

test('view api results', async ({ page }) => {
  await page.goto('/');
  const apiResult = page.locator('[data-testid="api-results"]');
  await expect(apiResult).toHaveText(`{
  "message": "Hello Nuxt"
}`);
});
