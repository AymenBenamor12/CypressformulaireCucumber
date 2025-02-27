const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
      plugins: [createEsbuildPlugin(config)],
      });
    
      
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      
      
      return config;
      
    },
    specPattern : "cypress/e2e/features/*.feature"
  },
   "cypress-cucumber-preprocessor": {
     "stepDefinitions": "cypress/support/Step_Definitions/*.js",
     "filterSpecs": true,
     "omitFiltered": true,
     "json": {
       "enabled": true,
       "formatter": "cucumber-json-formatter",
       "output": "cypress/reports/json/cucumber-report.json"
    },
   "html": {
    "enabled": true
  }
  }
});
