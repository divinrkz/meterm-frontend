describe('Main App Tests', () => {
    it('loads successfully', () => {E
        cy.visit('http://localhost:3000')
        cy.get('nav')
            .should('be.visible')
            .within(() => {
                cy.get('a')
                    .should('be.visible')
                    .should('contain.text','METERM')
            })
        // Form
        cy.get('form').should('be.visible')
        cy.get('h1').should('be.visible')
        .should('contain.text', 'Buying Electricity')
        cy.get('button')
            .should('contain.text','Purchase')
    })
})