
const  URL = "https://demoqa.com/automation-practice-form"
const  FIRSTNAME_ID = "#firstName"
const   LASTTNAME_ID = "#lastName"
const  EMAILTNAME_ID = "#userEmail"
const  GENDER_ID = "#gender-radio-1"
const  NUMBER_ID = "#userNumber"
const  ADDRESS_ID = "#currentAddress"
const  SUBMIT_ID = "#submit"
class pageObjects{

    static openUrl() {
        cy.visit(URL)

    }
    static fillFirstname(name){
        cy.get(FIRSTNAME_ID).type(`${name}{enter}`)
    }
    
    static fillLastename(lastname){
        cy.get(LASTTNAME_ID).type(`${lastname}{enter}`)
    }

    static fillEmail (mail){
        cy.get(EMAILTNAME_ID).type(`${mail}{enter}`)
    }

    static fillNumber(number){
        cy.get(NUMBER_ID).type(`${number}{enter}`)
    }
    static fillAdresse(adresse){
        cy.get(ADDRESS_ID).type(`${adresse}{enter}`)
    }
  
    static submit(){
        cy.get(SUBMIT_ID).click()
    }
   
    static gender(){
        cy.get(GENDER_ID).check()
    }
}

export default pageObjects;