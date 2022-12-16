import routesData from '../data/routes.data'
import cartPage  from '../pageobjects/cart.page'

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


    it('Select an item from the product gallery page', () => {
        
        //choose an item from gallery page
        cartPage.selectMacbook()

        cy.get(cartPage.title).should('be.visible')
        cy.get(cartPage.title).should('contain.text', 'Mackbook Pro') //title of product should be on page
        cy.url().should('include', routesData.laptopDetail) //should be directed to this product detail page
    })

    it('Increase product quantity from the product detail page', () => {
        
        //choose an item from gallery page
        cartPage.selectMacbook()

        //increase the qauntity of the product to 2
        cartPage.increaseProductAmt()

        cy.get(cartPage.quantity).should('contain.value', '2') //increased number should be shown
        cy.get(cartPage.price).should('contain.text', '2000')  //price of product should be on page
        cy.url().should('include', routesData.laptopDetail) 
    })

    it('Add items to the cart from the product detail page', () => {
        
        //choose an item from gallery page
        cartPage.selectMacbook()

        //increase the qauntity of the product to 2
        cartPage.increaseProductAmt()

        //add the products to cart
        cartPage.addLaptopToCart()

        cy.get(cartPage.title).should('contain.text', 'Mackbook Pro')
        cy.get(cartPage.cartQuantity).should('contain.text', '2')
        cy.url().should('include', routesData.cart) //should be routed to cart page 
    })
})