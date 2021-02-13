import { on } from "process"
import { onDatepickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"



describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.dialogPage()
        navigateTo.popoverPage()
        navigateTo.windowPage()
    })

    it('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Mikolaj', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailandPassword('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerDateFromToday(1)
        onDatepickerPage.selectDatepickerWithRangeFromToday(5, 20)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Mikolaj', 'Kozlowski')
        onSmartTablePage.updateAgeByFirstName('Mikolaj', '26')
        onSmartTablePage.deleteRowByIndex(1)

    })

})