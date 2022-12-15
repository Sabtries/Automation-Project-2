import routesData from "../data/routes.data"
import pgalleryPage from "../pageobjects/pgallery.page"


describe('Product Gallery', () => {
    beforeEach (() => {
     cy.visit('/')
     cy.get('#signInOrRegister').click()

     cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', { args: {} }, ({}) => {
        
        //Login user with valid email and password
        cy.get(`input[id*='email']`).type('thomie@gail.co')
        cy.get(`[id='1-password']`).type('WordPass1')
        cy.get(`button[type="submit"]`).click()
        cy.wait(3000)
        //AuthUser.signUpUser('thom@gail.c', 'wordpass1')
        }
     )
    })

    it('Add a product with a quantity of 2 to cart from the product gallery page', () => {

      
        //clear the quantity field and increase amount
        pgalleryPage.increaseAmt()

        //add the product to cart
        pgalleryPage.addSweatshirtToCart()

        //wait 4 seconds for page to update
        cy.wait(4000)

        //verify that product is added to cart
        cy.get(pgalleryPage.cartIcon).should('contain.text', '$100')


        // cy.get(`//button[@data-item-id='quality-sweatshirt-hooded']`).should('be.visible')
        // cy.get(``)
    })

    it('Verify clicking the cart icon directs you to the cart summary', () => {

        //add jean pants to cart
        pgalleryPage.addJeanPants()

        //wait 3 seconds for page to update
        cy.wait(3000)
        
        //click cart button
        pgalleryPage.checkCart()

        //verify cart summary is open
        cy.get(pgalleryPage.cartIcon).should('be.visible')
        cy.get(pgalleryPage.summary).should('contain.text', 'Cart summary')
        
    })

    it('Sign user out from product gallery page', () => {

        //click sign out button
        pgalleryPage.signOutUser()

        //verify the user is signed out

        cy.get('.chakra-heading.css-xrxou1').should('contain.text', 'Welcome to the Automation Camp Store')
        cy.get('#signInOrRegister').should('be.visible')
        cy.url().should('contain', routesData.main)
        
    })

})