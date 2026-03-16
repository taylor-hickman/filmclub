import { test } from "@playwright/test";

test.describe("watchlist flow", () => {
  test.skip(
    !process.env.PLAYWRIGHT_BASE_URL,
    "Set PLAYWRIGHT_BASE_URL plus auth/TMDB env vars to run end-to-end flows.",
  );

  test("landing, auth entry, and invite entry routes respond", async ({
    page,
  }) => {
    await page.goto("/");
    await page
      .getByRole("heading", {
        name: "One account for every tool your film group needs.",
      })
      .waitFor();

    await page.goto("/api/auth/signin?callbackUrl=%2Fapp");
    await page.goto("/join/example-token");
  });
});
