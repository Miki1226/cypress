/// <reference types="cypress"/>

describe('First suite', () => {

    it('navigate', () => {

        cy.visit('https://aniagotuje.pl/')
        cy.get('#search-box')
            .click()
            .type('gofry{enter}')
        cy.contains('Przepis na gofry').click({ force: true })

    })
})