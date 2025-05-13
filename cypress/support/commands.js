import { generateData } from '../support/fakerUtils';

Cypress.Commands.add('generateData', () => {
    let testData = generateData()
    cy.writeFile('cypress/fixtures/testData.json', testData);
});

Cypress.Commands.add('regForm', () => {
    cy.readFile('cypress/fixtures/testData.json').then((testData) => {
        cy.log(`Registering as ${testData.role}`);
        cy.get('#username').type(testData.username);
        cy.get('#email').type(testData.email);
        cy.get('#password').type(testData.password);
        cy.get('#confirmPassword').type(testData.password);
        cy.get(`#${testData.roleId}`).click();
    });
});

Cypress.Commands.add('logIn', () => {
    cy.readFile('cypress/fixtures/testData.json').then((testData) => {
        cy.log(`Logging in as ${testData.username}`);
        cy.get('input[data-testid=input-username]').type(testData.email);
        cy.get('#password').type(testData.password);

        cy.contains('button', 'Sign in').click();    
        if (testData.role === 'user') {
            cy.url().should('contains', '/topics')
        } else {
            cy.url().should('contains', '/manage-topics')
        }
    });
});
