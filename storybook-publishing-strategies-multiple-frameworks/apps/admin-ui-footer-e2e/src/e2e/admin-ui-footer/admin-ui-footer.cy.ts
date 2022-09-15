describe('admin-ui-footer: AdminUiFooter component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=adminuifooter--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AdminUiFooter!');
    });
});
