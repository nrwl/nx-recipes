describe('admin-ui-header: AdminUiHeader component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=adminuiheader--primary&args=userName;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AdminUiHeader!');
    });
});
