import { test, expect } from "@playwright/test";

test("has url", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page).toHaveURL("http://localhost:5173/");

  const button = await page.getByTestId("count");
  await expect(button).toHaveText("count is 0");
  button.click();
  await expect(button).toHaveText("count is 1");

  await page.screenshot({ path: "example.png" });
});
