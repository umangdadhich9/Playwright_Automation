import { test, expect } from '@playwright/test';

test('Verify cart contents for Sauce Labs Backpack', async ({ page }) => {

  //Step 1 - Navigate to the login page
  
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Log in using the provided credentials

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await page.waitForTimeout(2000);

  // Step 3: Identify the item named "Sauce Labs Backpack" on the inventory page

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Step 4: Add this specific item ("Sauce Labs Backpack") to the shopping cart.
  
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.waitForTimeout(2000);
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

  // Step 5: Navigate to the shopping cart page.
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.waitForTimeout(3000);
  await expect(page).toHaveURL(/cart\.html/);

  // Step 6: Verify the contents of the cart by asserting two conditions
  const itemName = await page.locator('.inventory_item_name').textContent();
  expect(itemName.trim()).toBe('Sauce Labs Backpack');

  // Step 7: The item name is "Sauce Labs Backpack" and "The item price is $29.99"
  const itemPrice = await page.locator('.inventory_item_price').textContent();
  expect(itemPrice.trim()).toBe('$29.99');
});
