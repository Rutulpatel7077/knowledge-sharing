import { test, expect } from "@playwright/test";

test.describe("Cards Component Tests", () => {
  test("loads and displays vehicle data", async ({ page, request }) => {
    await page.goto("/vehicles");
    const response = await request.get("https://api.bhadegadi.com/v2/vehicles");
    const vehicles = await response.json();
    const apiVehicleLength = vehicles.DataList.length;
    const cardLength = await page.locator(".card").count();
    expect(cardLength).toBe(apiVehicleLength);
  });
});
