describe('template spec', () => {

    it('passes', () => {
    cy.visit('https://mantis-prova.base2.com.br/')
    cy.get('#username').type('roberto_oliveira')
    cy.get('.width-40').click()
    cy.get('#password').type('teste24')
    cy.get('.width-40').click()
     
    cy.wait(5000)

    cy.log("Ambiente acessado com sucesso!")

    
  })
  
  
})