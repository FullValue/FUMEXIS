import { expect, test } from "@playwright/test";

const routes = [
  "/", "/services", "/securite-incendie", "/desenfumage", "/surete", "/formation",
  "/a-propos", "/contact", "/services/extincteurs", "/services/videosurveillance", "/services/maintenance",
  "/mentions-legales", "/politique-confidentialite",
];

test("all public routes render without console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  page.on("pageerror", (error) => errors.push(error.message));

  for (const route of routes) {
    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response?.ok(), route).toBeTruthy();
    await expect(page.locator("h1").first(), route).toBeVisible();
  }

  expect(errors).toEqual([]);
});

test("removed services return a 404", async ({ page }) => {
  for (const route of [
    "/services/ria",
    "/services/colonnes-seches",
    "/services/colonnes-en-charge",
    "/services/extinction-automatique",
    "/services/extinction-exterieure",
    "/services/camera-infrarouge",
  ]) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(404);
  }
});

for (const width of [390, 430, 768, 1024, 1440, 1920]) {
  test(`homepage has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });
    const dimensions = await page.evaluate(() => ({ viewport: window.innerWidth, page: document.documentElement.scrollWidth }));
    expect(dimensions.page, JSON.stringify(dimensions)).toBeLessThanOrEqual(dimensions.viewport + 1);
  });
}

test("mobile menu, filters, FAQ and contact validation work", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Ouvrir le menu" }).click();
  await expect(page.locator(".mobile-menu")).toBeVisible();
  await page.getByRole("button", { name: "Fermer le menu" }).click();

  await page.goto("/services");
  await page.getByRole("button", { name: "Sûreté" }).click();
  await expect(page.getByRole("heading", { name: "Vidéosurveillance" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Extincteurs" })).toHaveCount(0);

  await page.goto("/");
  const faqButton = page.getByRole("button", { name: /Proposez-vous la maintenance/ });
  await faqButton.scrollIntoViewIfNeeded();
  await faqButton.click();
  await expect(page.getByText(/Une visite initiale permet/)).toBeVisible();

  await page.goto("/contact");
  await page.getByRole("button", { name: "Envoyer ma demande" }).click();
  await expect(page.locator("input:invalid").first()).toBeVisible();
});
