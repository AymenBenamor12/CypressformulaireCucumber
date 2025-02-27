// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
/// <reference types ="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignorer les erreurs liées aux scripts tiers
    return false;
  });
  Cypress.Commands.add('blockAds', () => {
    cy.intercept('GET', '**/google/auction/**', { statusCode: 204 });
    cy.intercept('GET', '**/googlesyndication/**', { statusCode: 204 });
  });
  
  beforeEach(() => {
    cy.blockAds();
  });
  
// Alternatively you can use CommonJS syntax:
// require('./commands')