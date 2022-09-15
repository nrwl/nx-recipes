describe('shared-ui-notification: SharedUiNotification component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=shareduinotification--primary&args=alertText;alertColor;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedUiNotification!');
    });
});
