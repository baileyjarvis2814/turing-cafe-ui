/// <reference types="cypress" />

describe('Turing Cafe Reservations', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      fixture: 'reservations.json',
    }).as('getReservations');
    cy.visit('http://localhost:3000');
  });

  it('should display reservations on initial load', () => {
    cy.wait('@getReservations');
    cy.get('.resy-card').should('have.length', 2);
    cy.get('.resy-card').first().within(() => {
      cy.get('h2').should('contain', 'Christie');
      cy.get('p').eq(0).should('contain', '12/29');
      cy.get('p').eq(1).should('contain', '7:00');
      cy.get('p').eq(2).should('contain', 'Number of guests: 4');
    });
  });

  it('should reflect input values in the form', () => {
    cy.get('input[placeholder="Name"]').type('Peter Parker').should('have.value', 'Peter Parker');
    cy.get('input[placeholder="Date (mm/dd)"]').type('12/25').should('have.value', '12/25');
    cy.get('input[placeholder="Time"]').type('7:00').should('have.value', '7:00');
    cy.get('input[placeholder="Number of guests"]').type('3').should('have.value', '3');
  });

  it('should add a new reservation to the page', () => {
    cy.get('input[placeholder="Name"]').type('Peter Parker');
    cy.get('input[placeholder="Date (mm/dd)"]').type('12/25');
    cy.get('input[placeholder="Time"]').type('7:00');
    cy.get('input[placeholder="Number of guests"]').type('3');
    cy.get('button').contains('Make Reservation').click();

    cy.get('.resy-card').should('have.length', 3);
    cy.get('.resy-card').last().within(() => {
      cy.get('h2').should('contain', 'Peter Parker');
      cy.get('p').eq(0).should('contain', '12/25');
      cy.get('p').eq(1).should('contain', '7:00');
      cy.get('p').eq(2).should('contain', 'Number of guests: 3');
    });
  });
});

