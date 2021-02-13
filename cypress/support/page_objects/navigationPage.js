function selectGroupMenuItem(groupName) {
    cy.contains('a', groupName).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
            if (attr.includes('left')) {
                cy.wrap(menu).click()
            }
        })
    })
}
export class NavigationPage {

    formLayoutsPage() {
        selectGroupMenuItem('Forms')
        cy.contains('Form Layouts').click()
    }

    datepickerPage() {
        selectGroupMenuItem('Forms')
        cy.contains('Datepicker').click()
    }

    dialogPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Dialog').click()
    }
    windowPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Window').click()
    }
    popoverPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Popover').click()
    }
    smartTablePage() {
        selectGroupMenuItem('Tables & Data')
        cy.contains('Smart Table').click()
    }
}

export const navigateTo = new NavigationPage()