describe('shared-ui-button: SharedUiButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=shareduibutton--primary&args=ctaText;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedUiButton!');
    });
});
