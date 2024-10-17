Cypress.Commands.add("login", () =>{

    cy.get('#username').type('roberto_oliveira')
    cy.get('.width-40').click()
    cy.get('#password').type('teste24')
    cy.get('.width-40').click()
     
    cy.wait(4000)

    cy.log("Ambiente acessado com sucesso!")

});