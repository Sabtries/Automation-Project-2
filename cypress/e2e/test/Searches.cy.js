
import searchPage from '../pageobjects/search.page'

describe('Make various searches', () => {
    beforeEach (() => {
     cy.visit('/')
     cy.get('#signInOrRegister').click()

     cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', { args: {} }, ({}) => {
        
        //Login user with valid email and password
        cy.get(`input[id*='email']`).type('thomie@gail.co')
        cy.get(`[id='1-password']`).type('WordPass1')
        cy.get(`button[type="submit"]`).click()
        cy.wait(3000)
        }
     )
    })

    it('Search the partial name of a product', () => {
        //t
        searchPage.enterSearch('mou')

        cy.get(searchPage.mousepadImg).should('be.visible')
        cy.get(searchPage.mousepadPrice).should('include.text', '20')
        cy.get(searchPage.mousepadCart).should('be.visible')
    })

    
    it('Search the wrong name of a product', () => {
        
        searchPage.enterSearch('jacket')

        cy.get(searchPage.mousepadImg).should('not.exist')
        cy.get(searchPage.noProduct).should('be.visible')
        cy.get(searchPage.noProduct).should('be.empty')
        cy.get(searchPage.mousepadCart).should('not.exist')
    })


    it('Search the name of a product under a category', () => {
        
        searchPage.selectCategory('p')

        searchPage.enterSearch('cargo')

        cy.get(searchPage.mousepadImg).should('not.exist') .//a product name that does not include the searched should not exist on the search result
        cy.get(searchPage.cargo).should('be.visible') //the product searched search be visible on the product gallery page
        cy.get(searchPage.tag).should('contain.text', 'pants')
    })

})
