
Feature: Remplir le formulaire ans le site demo 

  Scenario: Remplir le formulaire ans le site demo
   Given je me connecte sur l'application demo
    When je remplis le champ firstname "<firstname>"
    When je remplis le champ lastname "<lastname>"
    When je remplis le champ useremail "<useremail>"
    When je clique sur le radio gender
    When je remplis le champ numero "<numero>"
    When je remplis le champ currentAddress "<currentAddress>"
    Then je clique sur le bouton submit
    

    Examples: 
      | firstname |lastname | useremail             | numero   | currentAdress | 
      | aymen1    | Amor1    | aymen.benamor@enis.tn  | 23412279 | soussa    |    
      | aymen2    | amor2    | aymen.benamor1@enis.tn | 23415279 | soussa    |    
      | aymen3    | Amor3    | aymen.benamor2@enis.tn | 24356872 | soussa   |     
      | aymen4    | amor4    | aymen.benamor3@enis.tn | 23418279 | soussa    |    
      | aymen5    | Amor5    | aymen.benamor4@enis.tn | 23419279 | soussa    |    
