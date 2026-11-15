
# 🧪 SauceDemo — Cypress E2E Automation

![Cypress](https://img.shields.io/badge/Cypress-E2E_Testing-17202C?logo=cypress)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?logo=node.js&logoColor=white)
![Tests](https://img.shields.io/badge/Last_Local_Run-8%2F8_Passing-brightgreen)

An end-to-end test automation project built with **Cypress and JavaScript**, covering essential e-commerce workflows.

[View Test Application](https://www.saucedemo.com/) |
[View Source Code](https://github.com/anapgrini/cypress-saucedemo-tests)

---

## 📌 About the Project

This project demonstrates practical Quality Assurance skills through automated functional testing of the SauceDemo application.

The automated scenarios cover:

- User authentication
- Shopping cart functionality
- Product price validation
- Checkout calculations
- Successful order completion

## 📊 Test Execution Results

| Test Suite | Tests | Passed |
|---|---:|---:|
| Authentication | 2 | 2 |
| Shopping Cart | 1 | 1 |
| Checkout | 5 | 5 |
| **Total** | **8** | **8** |

**Latest local execution:** 8 tests passed in 22 seconds.

---

## 🔎 Explore Test Scenarios

<details>
<summary>🔐 Authentication Tests — 2 tests</summary>

- Successful login with valid credentials
- Login attempt with invalid credentials
- Error message validation
- URL validation

[View authentication tests](cypress/e2e/spec.cy.js)

</details>

<details>
<summary>🛒 Shopping Cart — 1 test</summary>

- Add a product to the cart
- Validate the cart badge
- Verify product name
- Validate product quantity

[View cart tests](cypress/e2e/cart.cy.js)

</details>

<details>
<summary>💳 Checkout — 5 tests</summary>

- Validate product pricing
- Verify cart pricing
- Validate checkout pricing
- Calculate subtotal, tax, and total
- Complete an order successfully

[View checkout tests](cypress/e2e/checkout.cy.js)

</details>

---

## 🛠️ Technologies

- Cypress
- JavaScript
- Node.js
- Git & GitHub
- Visual Studio Code

## 🧩 Automation Practices

- Reusable custom commands
- Test setup with `beforeEach()`
- Functional assertions
- Independent test scenarios
- Command-line test execution
- Git version control

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/anapgrini/cypress-saucedemo-tests.git
```

### 2. Open the project

```bash
cd cypress-saucedemo-tests
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run all tests

```bash
npx cypress run
```

### 5. Open Cypress interactively

```bash
npx cypress open
```

---

## 👩‍💻 Author

**Ana Paula Pelegrini**

QA Analyst | Manual & Automation Testing

[GitHub Profile](https://github.com/anapgrini)
