const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const nodePolyfills = require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin

const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
// const { merge } = require('mochawesome-merge')

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [nodePolyfills(), createEsbuildPlugin(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  env: {
    url: 'https://www.noip.com/login'
  },
  retries: {
    runMode: 2,
    openMode: 0
  },
  // reporter: 'cypress-mochawesome-reporter',
  // reporterOptions: {
  //   reportDir: '/report',
  //   charts: true,
  //   reportPageTitle: 'custom-title',
  //   embeddedScreenshots: false,
  //   inlineAssets: true,
  //   saveAllAttempts: false,
  // },
  defaultCommandTimeout: 50000,
  requestTimeout: 50000,
  screenshotOnRunFailure: false,
  video: false,
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/**/*.feature",
  },
});
