
Feature: Remplir le formulaire ans le site demo
  I want to use this template for my feature file

  @Formulaire
  Scenario Outline: Remplir le formulaire ans le site demo
    Given je me connecte sur application demo
    When je remplir le champ firstname  "<firstname>"
    When je remplir le champ lastname  "<lastname>"
    When je remplir le champ useremail  "<useremail>"
    When je click sur le radio gender
    When je remplir le champ numero  "<numero>"
    When je remplir le champ currentAdress  "<currentAdress>"
    Then je click  sur le bouton submit
    

    Examples: 
      | firstname |lastname | useremail             | numero   | currentAdress | 
      | aymen1    | Amor1    | aymen.benamor@enis.tn  | 23412279 | soussa    |    
      | aymen2    | amor2    | aymen.benamor1@enis.tn | 23415279 | soussa    |    
      | aymen3    | Amor3    | aymen.benamor2@enis.tn | 24356872 | soussa   |     
      | aymen4    | amor4    | aymen.benamor3@enis.tn | 23418279 | soussa    |    
      | aymen5    | Amor5    | aymen.benamor4@enis.tn | 23419279 | soussa    |    
