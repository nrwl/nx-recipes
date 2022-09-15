describe('client-ui-footer', () => {
  beforeEach(() => cy.visit('/iframe.html?id=footercomponent--primary'));
  it('should render the component', () => {
    cy.get('publishing-strategies-multiple-frameworks-footer').should('exist');
  });
});
