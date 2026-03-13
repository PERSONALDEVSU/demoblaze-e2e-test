const { defineConfig } = require("cypress")

module.exports = defineConfig({

  pageLoadTimeout: 120000,

  
  screenshotOnRunFailure: true,

  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true
    
  },

  e2e: {
    baseUrl: "https://opencart.abstracta.us",
    setupNodeEvents(on, config) {}
  }

})
