# Test Automation PH Website Automation with Cypress JS 📟

This test automation sample project contains Test Automation PH Website automation using Cypress for testing. It includes tests for Registering and Login features for User and Quiz-Master Roles with the flexibility to run them in headless and headed modes. 

## Table of Contents 📚
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
  - [Headless Mode](#headless-mode)
  - [Headed Mode](#headed-mode)
- [Features](#features)

---

## Installation 🛠️
### 1. Create a Project Folder
- First, create a project folder named cypress-projects on your Desktop (or in your preferred location):
- Windows: Navigate to your Desktop, right-click, and select New Folder. Name it cypress-projects.

### 2. Clone the Repository

```bash
cd ~/Desktop/cypress-projects
git clone https://github.com/allanumotoy1600/aumotoy-cypress-exam.git
```

### 3. Install Dependencies
```bash
cd aumotoy-cypress-exam
npm install
```
## Running the Tests 📋
- We have spec files (Test Code/Files) for the Registration and Login features, and it can be run in both headless and headed modes.

### Headless Mode 🧑‍💻 (Without Browser UI)
1. Login Test (Headless)

- To run the login test in headless mode:

```bash
npm run exam-test
```

### Headed Mode 🖥️ (With Browser UI)
In headed mode, the browser runs with a visible UI. This mode is useful for debugging and visual verification of test actions.

Login Test (Headed)

To run the login test in headed mode:
```bash
npx cypress open
```

## Features ✨
- **Login Test**: Automates the login functionality using valid and invalid credentials on the Test Automation PH website.

- **Headless Mode**: Run the tests without opening the browser window for faster execution.

- **Headed Mode**: Run the tests with the browser window open, useful for debugging and visual checks.

## Additional Notes 🗒️
- Cypress Dashboard: You can also integrate your tests with the Cypress Dashboard for better monitoring and test reporting (optional).

- Custom Commands: You can extend the functionality by adding custom Cypress commands in cypress/support/commands.js for reuse across your tests.

- Faker Utiliy: You can extend the functionality by adding custom Faker Utility JS files in cypress/supprt/fakerUtils.js for resuse and automation of data generation.

