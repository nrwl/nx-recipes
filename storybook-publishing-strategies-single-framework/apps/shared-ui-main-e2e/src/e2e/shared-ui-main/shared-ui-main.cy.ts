describe('shared-ui-main: SharedUiMain component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=shareduimain--primary&args=text;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedUiMain!');
    });
});
