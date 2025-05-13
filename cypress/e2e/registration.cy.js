describe('Registration for Quiz Master & Regular User', { testIsolation: false }, () => {

  before(() => {
    cy.visit('/');
    cy.contains('a', 'Register').click();
    cy.generateData();
  });

  after(() => {
    cy.contains('Log out').click()
    cy.url().should('include', '/login')
  })

  it('Verify User Registration works for both Quiz Master and Regular User Roles', () => {
    cy.url().should('include', '/register');
    cy.regForm();
    cy.contains('button', 'Register').click();
    cy.url().should('contains', '/login')
  });

  it('Verify User Registration works for both Quiz Master and Regular User Roles with incorrect E-mail Format', () => {
    cy.visit('/register')
    cy.url().should('include', '/register');
    cy.regForm();
    cy.get('#email').clear().type(`incorrect@Email`);
    cy.contains('button', 'Register').click();
    cy.contains(`Please enter a valid email`);
  });

  it('Verify User Registration works for both Quiz Master and Regular User Roles', () => {
    cy.visit('/login')
    cy.url().should('include', '/login');
    cy.logIn();
  });



});