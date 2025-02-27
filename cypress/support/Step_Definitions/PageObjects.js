
const  URL = "https://demoqa.com/automation-practice-form"
const  FIRSTNAME_ID = "#firstName"
const   LASTTNAME_ID = "#lastName"
const  EMAILTNAME_ID = "#userEmail"
const  GENDER_ID = "#gender-radio-1"
const  NUMBER_ID = "#userNumber"
const  ADDRESS_ID = "#currentAddress"
const  SUBMIT_ID = "#submit"



class pageObjects


{

    static openUrl() {
        cy.visit(URL ,{ timeout: 10000 });
        cy.wait(3000);

    }
    static fillFirstname(name){
        cy.get(FIRSTNAME_ID).type(`name`)
    }
    
    static fillLastename(lastname){
        cy.get(LASTTNAME_ID).type(`lastname`)
    }

    static fillEmail (mail){
        cy.get(EMAILTNAME_ID).type(`mail`)
    }

    static fillNumber(number){
        cy.get(NUMBER_ID).type(`number`)
    }
    static fillAdresse(adresse){
        cy.get(ADDRESS_ID).type(`adresse`)
    }
  
    static submit(){
        cy.get(SUBMIT_ID).click({ force: true })
    }
   
    static selectgender(){
        cy.get(GENDER_ID).check({ force: true })
    }
}

export default pageObjects;