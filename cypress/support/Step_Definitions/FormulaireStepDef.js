
import { When, Then, Given , } from "@badeball/cypress-cucumber-preprocessor";
import pageObjects from './PageObjects'

Given ('je me connecte sur application demo',()=>{
  pageObjects.openUrl()
})

When('je remplir le champ firstname {string}' , (firstname) =>{
   pageObjects.fillFirstname(firstname)
})
When ('je remplir le champ lastname {string}', (lastname) =>{
    pageObjects.fillLastename(lastname)
})
When ('je remplir le champ useremail {string}', (useremail) =>{
    pageObjects.fillEmail(useremail)
})
When ('je click sur le radio gender', ()=>{
    pageObjects.gender()
})
When('je remplir le champ numero {string}' ,  (numero)=>{
    pageObjects.fillNumber(numero)
})
When ('je remplir le champ currentAdress {string}', (currentAdress)=>{
    pageObjects.fillAdresse(currentAdress)
})
Then ('je click  sur le bouton submit',()=>{
    pageObjects.submit()
})

