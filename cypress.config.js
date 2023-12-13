const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "22fcbd",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
