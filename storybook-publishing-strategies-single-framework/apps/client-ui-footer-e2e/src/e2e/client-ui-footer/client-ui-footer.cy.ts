describe('client-ui-footer: ClientUiFooter component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=clientuifooter--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ClientUiFooter!');
    });
});
