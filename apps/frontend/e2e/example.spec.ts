import { test, expect } from "@playwright/test";

test("has url", async ({ page }) => {
  await page.route("**/api/hello/", (route) =>
    route.fulfill({ json: { message: "Hello from mock!" } })
  );
  await page.goto(process.env.PLAYWRIGHT_WEB_URL || "http://localhost:5173");

  await expect(page).toHaveURL(
    process.env.PLAYWRIGHT_WEB_URL || "http://localhost:5173"
  );

  const button = await page.getByTestId("count");
  await expect(button).toHaveText("count is 0");
  button.click();
  await expect(button).toHaveText("count is 1");

  await page.screenshot({ path: "example.png" });
});
