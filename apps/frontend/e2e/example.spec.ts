import { test, expect } from "@playwright/test";

test("has url", async ({ page }) => {
  await page.route("**/api/hello/", (route) =>
    route.fulfill({ json: { message: "Hello from mock!" } }),
  );

  if (!process.env.PLAYWRIGHT_WEB_URL) {
    throw new Error("PLAYWRIGHT_WEB_URL not set");
  }

  await page.goto(process.env.PLAYWRIGHT_WEB_URL);
  await expect(page).toHaveURL(process.env.PLAYWRIGHT_WEB_URL);

  const button = page.getByTestId("count");
  await expect(button).toHaveText("count is 0");

  await button.click();
  await expect(button).toHaveText("count is 1");

  await page.screenshot({ path: "example.png" });
});
