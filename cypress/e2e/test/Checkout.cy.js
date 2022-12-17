import routesData from "../data/routes.data"
import pgalleryPage from "../pageobjects/pgallery.page"
import checkoutPage from "../pageobjects/checkout.page"
cy.faker = require('faker')



describe('Complete a Checkout Workflow', () => {
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
     pgalleryPage.increaseAmt() //clear the quantity field and increase amount of product 
     cy.wait(2000) //wait for page to update
     pgalleryPage.addSweatshirtToCart() //add the product to cart    
     cy.wait(2000) //wait for page to update
    })

    it('Add a product to complete billing using faker', () => {
      
     checkoutPage.completeBilling() //complete the billing form 

     cy.url().should('include', routesData.checkout)
     cy.get(checkoutPage.titleOfPage).should('have.text', ' Billing ')
     cy.get(checkoutPage.continueShopping).should('be.visible')
    })


    it('Complete Payment for Order', () => {
        
       checkoutPage.completeBilling() //continue to checkout

       checkoutPage.continueToPayment() //complete the billing form 

       checkoutPage.makePayment() //proceed to enter and submit payment details
  
       cy.get(checkoutPage.titleOfPage).should('have.text', ' Billing ')
       cy.get(checkoutPage.continueShopping).should('be.visible')
       cy.get(checkoutPage.placeOrderBtn).should('be.visible')
    })

    it('Verify Order is complete', () => {

       checkoutPage.completeBilling() //continue to checkout

       checkoutPage.continueToPayment() //complete the billing form 
       
       checkoutPage.confirmPaymemt() //proceed to enter and submit payment details
       
  
       cy.url().should('contain', 'order')
       cy.wait(2000) //wait for order page to load
       cy.get(checkoutPage.confirmation).should('be.visible')
       cy.get(checkoutPage.invoice).should('be.visible')
    })
  



})