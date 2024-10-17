
describe('Adicionando Nota', () => {
    it('', () => {

        cy.visit('https://mantis-prova.base2.com.br/')

        cy.login();

        cy.get(':nth-child(2) > a > .menu-icon').click()
        cy.get('tbody > :nth-child(1) > .column-id > a').click()
        cy.get(':nth-child(2) > .widget-box > .widget-header > .widget-toolbar').click()
        cy.get('.lbl').click()
        cy.get('#bugnote_text').type('TesteTesteTesteTesteTesteTesteTeste').click()
        cy.get('.widget-toolbox > .btn').click()


    })


})