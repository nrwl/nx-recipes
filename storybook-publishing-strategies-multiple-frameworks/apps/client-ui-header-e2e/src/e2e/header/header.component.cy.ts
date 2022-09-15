describe('client-ui-header', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=headercomponent--primary&args=clientName:Test+Client;'
    )
  );
  it('should render the component', () => {
    cy.get('publishing-strategies-multiple-frameworks-header').should('exist');
  });
});
