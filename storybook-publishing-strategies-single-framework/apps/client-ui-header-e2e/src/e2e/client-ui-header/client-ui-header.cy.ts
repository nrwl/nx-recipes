describe('client-ui-header: ClientUiHeader component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=clientuiheader--primary&args=title;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ClientUiHeader!');
    });
});
