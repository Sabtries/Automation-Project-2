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
        cy.wait(3000) //wait for page to load
        }
     )
    })

    it('Decrease product quantity from Cart Summary', () => {
        //choose an item from gallery page
        cartPage.selectMacbook()

        //increase the qauntity of the product to 2
        cartPage.increaseProductAmt()

        //add the products to cart
        cartPage.addLaptopToCart()

        cy.wait(4000)//wait for page to load

        //decrease product to 1 item
        cartPage.decreaseQuantity()

        cy.get(cartPage.cartQuantity).should('have.text', '1')
        cy.get(cartPage.total).should('contain.text', '$2,000.00')
        cy.url().should('include', routesData.cart)
    })

    it('Remove an item from the cart summary page', () => {
        //choose an item from gallery page       
        cartPage.selectMacbook()
        
        //wait for page to load
        cy.wait(3000)

        //add the products to cart
        cartPage.addLaptopToCart()

        //wait for page to load
        cy.wait(1000)

        //remove laptop from cart
        cartPage.deleteFromCart()

        cy.wait(1000)

        cy.get(cartPage.cartAmount).should('have.text', ' 0 ')
        cy.get(cartPage.cartQuantity).should('not.exist')
        cy.get(cartPage.total).should('not.exist')
        cy.url().should('include', routesData.cart)
    })

    it('Return to the product detail page', () => {
        //choose 2 items from gallery page 
        cartPage.addPillow() 

        cartPage.selectMacbook()

        //wait for page to load
        cy.wait(1000)

        //add the products to cart
        cartPage.addLaptopToCart()

        //return to product detail page
        cartPage.navigateToPageDetail()

        cy.get(cartPage.title).should('contain.text', 'Mackbook Pro')
        cy.get(cartPage.quantity).should('contain.value', '1')
        cy.get(cartPage.total).should('not.exist')
        cy.url().should('include', routesData.laptopDetail)
    })
})