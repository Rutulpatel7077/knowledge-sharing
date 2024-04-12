import { test, expect } from '@playwright/test';

test.describe('App Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('increments and decrements the counter', async ({ page }) => {
    await page.click('text=Increment');
    await expect(page.locator('data-testid=counterValue')).toHaveText('1');

    await page.click('text=Decrement');
    await expect(page.locator('data-testid=counterValue')).toHaveText('0');
  });

  test('submits form data', async ({ page }) => {
    await page.fill('data-testid=nameInput', 'John Doe');
    await page.fill('data-testid=emailInput', 'john@example.com');
    await page.click('data-testid=submitButton');

    // Assuming you handle the form submission with an alert or redirect
    // Here's how you might handle an alert
    page.once('dialog', dialog => {
      expect(dialog.message()).toContain('Submitting Name: John Doe, Email: john@example.com');
      dialog.dismiss();
    });
  });

  test('navigates to /vehicles', async ({ page }) => {
    await page.click('data-testid=vehiclesLink');
    await expect(page).toHaveURL('/vehicles'); // Update this to match your expected URL
  });

  test('loads user data after async operation', async ({ page }) => {
    await expect(page.locator('text=Loading user data...')).toBeVisible();
    await expect(page.locator('text=John Doe')).toBeVisible({ timeout: 3000 }); // Adjust timeout as necessary
  });
});
