/// <reference types="cypress" />

describe('JSON objects', () => {

    it('JSON objects', () => {
        cy.openHomePage()

        const simpleObject = { "key": "value", "key2": "value2" }

        const simpleArrayofValues = ["one", "two", "three"]

        const arrayOfObjects = [{ "key": "value" }, { "key2": "value2" }, { "key3": "value3" }]

        const typesOfData = { "string": "this is a string", "number": 10 }

        const mix = {
            "FirstName": "Mikolaj",
            "LastName": "Kozlowski",
            "Age": 26,
            "Students": [{
                    "firstName": "Tom",
                    "lastName": "Hanks"
                },
                {
                    "firstName": "Bob",
                    "lastName": "Marley"
                }
            ]
        }

        console.log(simpleObject.key)
        console.log(simpleObject["key2"])
        console.log(simpleArrayofValues[1])
        console.log(arrayOfObjects[2].key3)
        console.log(mix.Students[1].firstName)

        const lastNameOfSecondStudent = mix.Students[1].lastName
    })

})