# Project Title: Verify Cart Contents on SauceDemo

This repository contains an automated Playwright test that verifies the process of adding an item (**Sauce Labs Backpack**) to the shopping cart on the [SauceDemo](https://www.saucedemo.com/) e-commerce website.

## Table of Contents

The goal of this test is to:
1. Log in to the SauceDemo website using valid credentials.
    Website: https://www.saucedemo.com
    Username: standard_user
    Password: secret_sauce

2. Identify the item named "Sauce Labs Backpack" on the inventory page.
3. Add the **"Sauce Labs Backpack"** item to the cart
4. Navigate to the cart page.
5. Verify:
   - The correct item name (`Sauce Labs Backpack`) is displayed.
   - The correct item price (`$29.99`) is shown.

---

## Tech Stack

- **Framework** Playwright (for browser automation and testing)
- **Language** JavaScript
- **Runtime** Node.js(runtime environment)
- **Editor** VS Code (recommended)

## Project Structure

saucedemo-playwright-test
├── tests
│ └── addToCart.spec.js
├── playwright.config.js
├── package.json
└── README.md
---

## Install Dependencies

1. npm install
2. npx playwright install
3. npx playwright test addToCart.spec.js