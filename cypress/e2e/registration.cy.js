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
  });

  it('Verify User Registration works for both Quiz Master and Regular User Roles', () => {
    cy.url().should('include', '/login');
    cy.logIn();
  });




});