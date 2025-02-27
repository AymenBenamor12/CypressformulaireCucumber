import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PageObjects from './PageObjects';

Given(`je me connecte sur l'application demo`, () => {
    PageObjects.openUrl();
});

When(`je remplis le champ firstname {string}`, (firstname) => {
    PageObjects.fillFirstname(firstname);
});

When(`je remplis le champ lastname {string}`, (lastname) => {
    PageObjects.fillLastename(lastname);
});

When(`je remplis le champ useremail {string}`, (useremail) => {
    PageObjects.fillEmail(useremail);
});

When(`je clique sur le radio gender`, () => {
    PageObjects.selectgender();
});

When(`je remplis le champ numero {string}`, (numero) => {
    PageObjects.fillNumber(numero);
});

When(`je remplis le champ currentAddress {string}`, (currentAddress) => {
    PageObjects.fillAdresse(currentAddress);
});

Then(`je clique sur le bouton submit`, () => {
    PageObjects.submit();
});