describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('storybook-compodoc-angular-root').should('exist');
  });
});
