describe('my-btn', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=buttoncomponent--primary&args=primary:false;backgroundColor;size:medium;label:Button;'
    )
  );
  it('should render the component', () => {
    cy.get('storybook-compodoc-angular-button').should('exist');
  });
});
