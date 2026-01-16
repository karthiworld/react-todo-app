import { test, expect } from '@playwright/test';

test('app loads', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Todo App')).toBeVisible();
});

test('add todo', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Add a new todo').fill('Learn Playwright');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByText('Learn Playwright')).toBeVisible();
});

test('toggle todo completion', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Add a new todo').fill('Complete task');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('checkbox').first().check();
  await expect(page.getByText('Complete task')).toHaveClass(/line-through/);
});

test('search todos', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Add a new todo').fill('React');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByPlaceholder('Search todos').fill('rea');
  await expect(page.getByText('React')).toBeVisible();
});

test('filter completed todos', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Add a new todo').fill('Done task');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('checkbox').first().check();
  await page.getByRole('button', { name: 'completed' }).click();
  await expect(page.getByText('Done task')).toBeVisible();
});

test('todos persist after refresh', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Add a new todo').fill('Persistent todo');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.reload();
  await expect(page.getByText('Persistent todo')).toBeVisible();
});
