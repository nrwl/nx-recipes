describe('web', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=butncomponent--primary&args=primary:false;backgroundColor;size:medium;label:Button;'
    )
  );
  it('should render the component', () => {
    cy.get('storybook-compodoc-angular-butn').should('exist');
  });
});
