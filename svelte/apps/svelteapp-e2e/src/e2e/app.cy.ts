import { getGreeting } from '../support/app.po';

describe('svelte', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome Nx with Svelte');
  });
});
