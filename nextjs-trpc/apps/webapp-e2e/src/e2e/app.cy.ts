import { getGreeting } from '../support/app.po';

describe('webapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display greetin message', () => {
    getGreeting().contains('Hello tRPC + Next.js!');
  });
});
