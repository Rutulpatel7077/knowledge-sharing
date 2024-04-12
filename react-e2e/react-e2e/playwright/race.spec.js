import { test, expect } from "@playwright/test";

test.describe("Explain async chaining", () => {
  test("loads and click on vehicle a tag", async ({ page }) => {
    await page.goto("/race-condition");
    await page.locator('a[href]', { hasText: 'Vehicles' }).click();
    await expect(page).toHaveURL("/vehicles");
  });
});
