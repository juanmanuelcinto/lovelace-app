import { expect, test } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

test('captures dashboard, lesson and practice evidence', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'LOVELACE' })).toBeVisible();
  await page.screenshot({ path: 'docs/evidencia/05-dashboard-app.png', fullPage: true });

  await page.getByTestId('nav-lesson').click();
  await page.getByRole('button', { name: /Geometria|Area de rectangulos/i }).click();
  await expect(page.getByRole('heading', { name: 'Area de rectangulos' })).toBeVisible();
  await page.screenshot({ path: 'docs/evidencia/06-explicaciones-app.png', fullPage: true });

  await page.getByTestId('nav-practice').click();
  await page.getByRole('button', { name: 'Fracciones equivalentes' }).click();
  await page.getByTestId('option-fra-1-a').click();
  await expect(page.getByText('Respuesta correcta')).toBeVisible();
  await expect(page.getByTestId('progress-accuracy')).toContainText('100%');
  await page.screenshot({ path: 'docs/evidencia/07-practica-app.png', fullPage: true });
});
