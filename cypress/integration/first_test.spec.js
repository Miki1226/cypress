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

describe('automationPractice suite', () => {

    describe('My suite section', () => {

        it('registration - positive path', () => {

            cy.visit('http://automationpractice.com/index.php')
            cy.get('.container').find('.login').click()
            cy.get('#create-account_form').should('contain', 'Create an account').then(form => {
                cy.wrap(form).find('#email_create').click().type('mik@mik.pl')
                cy.wrap(form).find('#SubmitCreate').click()
            })


        })
        it.only('validate menu names', () => {

            cy.visit('http://automationpractice.com/index.php')

            cy.get('#block_top_menu').then((menu) => {
                cy.wrap(menu).find('.sf-menu')
                    .find('[title="Women"]')
                    .should('contain', 'Women')


                cy.wrap(menu).find('.sf-menu')
                    .find('[title="Dresses"]')
                    .should('contain', 'Dresses')


                cy.wrap(menu).find('.sf-menu')
                    .find('[title="T-shirts"]')
                    .should('contain', 'T-shirts')

            })
        })
    })
})