const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: "https://www.vaidepromo.com.br",
    experimentalRunAllSpecs: true,
    specPattern: [
      'cypress/e2e/passagensAerea.cy.js',
      'cypress/e2e/seguroViagem.cy.js'
    ]
  },
});
  