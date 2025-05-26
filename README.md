# MCP (Model Context Protocol) Test Automation

This repository contains automated tests for the Model Context Protocol documentation using both Cypress and Playwright test frameworks.

## 🚀 Project Structure

```
MCP/
├── Cypress/
│   ├── cypress/
│   │   ├── e2e/            # Cypress test files
│   │   ├── support/        # Support files and commands
│   │   └── fixtures/       # Test data files
│   └── cypress.config.ts   # Cypress configuration
├── Playwright/
│   ├── tests/             # Playwright test files
│   ├── pages/             # Page objects
│   └── playwright.config.ts # Playwright configuration
└── README.md
```

## ⚙️ Setup and Installation

### Prerequisites
- Node.js 16 or higher
- npm 8 or higher
- Chrome browser

### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd MCP
```

2. Install dependencies for both frameworks:
```bash
# For Cypress
cd Cypress
npm install

# For Playwright
cd ../Playwright
npm install
```

## 🧪 Running Tests

### Cypress Tests
```bash
cd Cypress
npx cypress run                     # Run all tests headlessly
npx cypress open                    # Open Cypress Test Runner
npx cypress run --spec "cypress/e2e/typescript-sdk-search-update.cy.ts"  # Run specific test
```

### Playwright Tests
```bash
cd Playwright
npx playwright test                 # Run all tests
npx playwright test --debug        # Run tests in debug mode
npx playwright show-report         # Show HTML test report
```

## 📝 Test Scenarios

### TypeScript SDK Navigation Test
- Navigates to MCP documentation
- Verifies TypeScript SDK link redirects to GitHub repository
- Handles cross-origin navigation

## 🛠️ Technologies

- Cypress 12+
- Playwright 1.35+
- TypeScript
- Node.js

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run all tests locally
4. Submit a pull request

## 📄 License

MIT License

## 📚 Documentation

- [Cypress Documentation](https://docs.cypress.io)
- [Playwright Documentation](https://playwright.dev/docs/intro)
