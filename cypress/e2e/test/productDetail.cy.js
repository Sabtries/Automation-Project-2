
import routesData from "../data/routes.data"
import pDetailPage from "../pageobjects/pDetail.page"



describe('Verify Product Details', () => {
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


    it('Switch images on product detail page', () => {
        //go to the product detail page 
        pDetailPage.goToDetailPage()

        cy.wait(2000)

        //switch images 
        pDetailPage.imageSwitch()

        cy.wait(1000)

        cy.get(pDetailPage.imageTwo).should('contain.text', '2 of 2') //this image should be the selected in the main view
        cy.url().should('contain', routesData.detailed) //test should be done on product detail page
    })

    
    it('Add an item to cart from the product detail page', () => {
        //go to the product detail page 
        pDetailPage.goToDetailPage()

        //wait for page to load
        cy.wait(3000)

        //add item to the cart 
        pDetailPage.addSweatshirt()

        cy.get(pDetailPage.cart).should('be.visible') //this image should be the selected in the main view
        cy.url().should('include', routesData.detailed) //test should be done on product detail page
        cy.get(pDetailPage.cart).should('contain.text', '50') //the price of the item should be reflected in cart
    })


    it('Confirm Back to Products button directs to the product gallery page', () => {
        //go to the product detail page 
        pDetailPage.goToDetailPage()

        //add item to the cart 
        pDetailPage.backToMain()

        cy.get(pDetailPage.homeBtn).should('be.visible') //page should have a Home button
        cy.url().should('contain', routesData.products) //should be directed to the product gallery page
        cy.get(pDetailPage.Iframe).should('be.visible') //this image should not be in the main view
    })

})