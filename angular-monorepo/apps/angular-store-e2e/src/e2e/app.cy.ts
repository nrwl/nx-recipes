describe('angular-store', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.contains('Welcome angular-store');
  });
});
