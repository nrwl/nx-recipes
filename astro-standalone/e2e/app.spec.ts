import { expect, test, Page } from '@playwright/test';

test('should show landing page', async ({ page }) => {
  await page.goto('/');

  await shouldHaveHeader(page);
  await expect(page).toHaveTitle(/Astro/);
  await shouldHaveFooter(page);
});

test('should show about page', async ({ page }) => {
  await page.goto('/about');

  await shouldHaveHeader(page);
  const features = page.getByTestId('feature');
  await expect(features).toHaveCount(5);
  await shouldHaveFooter(page);
});

test('should show blog page', async ({ page }) => {
  await page.goto('/blog');

  await shouldHaveHeader(page);

  const post = page.getByTestId('post');
  expect(await post.count()).toBeGreaterThanOrEqual(3);

  await shouldHaveFooter(page);
});

async function shouldHaveHeader(page: Page) {
  await expect(page.locator('header')).toBeVisible();
}

async function shouldHaveFooter(page: Page) {
  await expect(page.locator('footer')).toBeVisible();
}
