// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   testDir: './tests',
//   timeout: 60000,
//   use: {
//     headless: false,
//     viewport: { width: 1280, height: 720 },
//     ignoreHTTPSErrors: true,
//   },
//   reporter: [['html', { outputFolder: 'playwright-report' }]],
// });


// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // set to false if you want to watch it run
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  },
  testDir: './tests',
  reporter: [['list']]
});
