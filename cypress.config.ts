import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    projectId: "22fcbd",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
