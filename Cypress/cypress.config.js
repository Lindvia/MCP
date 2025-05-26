const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://modelcontextprotocol.io',
    setupNodeEvents(on, config) {
      return config
    },
  },
})
