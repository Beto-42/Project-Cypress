const { select } = require("async")

describe('Criando novas tarefas', () => {
    it('Utilizando o Wait', () => {

        cy.visit('https://mantis-prova.base2.com.br/')

        cy.get('#username').type('roberto_oliveira')
    cy.get('.width-40').click()
    cy.get('#password').type('teste24')
    cy.get('.width-40').click()
     
    cy.wait(4000)

    cy.log("Ambiente acessado com sucesso!")

    cy.get('.hidden-sm > .btn-group > .btn').click()
    cy.get('#category_id').select('1').should('have.value','1')

    cy.get('#reproducibility').select('10').should('have.value', '10')

    cy.get('#priority').select('40').should('have.value', '40')

    cy.get('#priority').select('50').should('have.value','50')

    cy.get('#summary').type('Sistema travado')
    cy.get('#description').type('TesteTesteTesteTesteTesteTeste')

    cy.get('.widget-toolbox > .btn').click()

    cy.log('Operação Realizada com Sucesso')


    })
})