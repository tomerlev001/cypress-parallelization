const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "ir4cef",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
