import { expect, test } from '@playwright/test';

test('navigates to practice and answers an exercise', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'LOVELACE' })).toBeVisible();
  await page.getByTestId('nav-practice').click();

  await expect(page.getByRole('heading', { name: 'Practica guiada' })).toBeVisible();
  await page.getByTestId('option-fra-1-a').click();

  await expect(page.getByText('Respuesta correcta')).toBeVisible();
  await expect(page.getByTestId('progress-accuracy')).toContainText('100%');
});

test('switches topic in the lesson view', async ({ page }) => {
  await page.goto('/explicaciones');

  await page.getByRole('button', { name: /Ecuaciones lineales/i }).click();
  await expect(page.getByRole('heading', { name: 'Ecuaciones lineales' })).toBeVisible();
  await expect(page.getByText('Pensar la ecuacion como una balanza evita mover terminos sin justificar la operacion.')).toBeVisible();
});
