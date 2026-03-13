OpenCart E2E Automation

Framework: Cypress

Test Scenario:
Guest user completes a purchase in OpenCart.

Steps Automated:

1. Open store
2. Add two products to cart
3. View cart
4. Start checkout
5. Select guest checkout
6. Fill checkout form
7. Confirm order

Execution Steps:

1. Install dependencies
npm install

2. Open Cypress
npx cypress open

3. Run test
opencart_purchase.cy.js