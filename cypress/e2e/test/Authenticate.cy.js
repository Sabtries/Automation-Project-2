
import routesData from '../data/routes.data'


describe('Authenticate various users', () => {
   beforeEach (() => {
    cy.visit('/')
    cy.get('#signInOrRegister').click()
   })

   
    it(`Signup user valid credentials`, () => {

        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', { args: {} }, ({}) => {
            //navigate to the signup form
            cy.get(`li a[href="#"]`).click()
            //sign up a new user with valid email and password
            cy.get(`input[id*='email']`).type('thinhomies@gail.co')
            cy.get(`[id='1-password']`).type('WordPass1')
            cy.get(`button[type="submit"]`).click()

        })
         //confirm user is signed in
         cy.url().should('include', '/products')
    })        


    it('Signup user with invalid credentials', () => {
        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', { args: {} }, ({}) => {
            //navigate to the signup form
            cy.get(`li a[href="#"]`).click()
            //sign up a new user with invalid password
            cy.get(`input[id*='email']`).type('thom@gail.c')
            cy.get(`[id='1-password']`).type('wordpass1')
            cy.get(`button[type="submit"]`).click()
            //AuthUser.signUpUser('thom@gail.c', 'wordpass1')

            //confirm user entered incorrect password
            cy.get('#auth0-lock-error-msg-password').should('contain.text', 'Password is invalid')    
        })
    })

    it('Login user with valid credentials', () => {
        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', { args: {} }, ({}) => {
        
            //Login user with valid email and password
            cy.get(`input[id*='email']`).type('thomie@gail.co')
            cy.get(`[id='1-password']`).type('WordPass1')
            cy.get(`button[type="submit"]`).click()
            //AuthUser.signUpUser('thom@gail.c', 'wordpass1')
        })
        //confirm user is signed in
        cy.url().should('contain', routesData.products)
        cy.get('.chakra-text.css-122rm4p').should('contain.text', 'Shop Now')

    })

    it('Login user with invalid credentials', () => {
        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', { args: {} }, ({}) => {
        
            //Verify user cannot login invalid email and password
            cy.get(`input[id*='email']`).type('thomie@gail.co')
            cy.get(`[id='1-password']`).type('orpaass1')
            cy.get(`button[type="submit"]`).click()
            //AuthUser.signUpUser('thom@gail.c', 'wordpass1')

            //confirm user gets an error message
        cy.get('.auth0-global-message.auth0-global-message-error').should('contain.text', 'Wrong email or password')   
        })
         
    })

    it('Reset password', () => {
        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', { args: {} }, ({}) => {
        
            //Reset password
            cy.get(`input[id*='email']`).type('thomie@gail.co')
            cy.get(`a[class='auth0-lock-alternative-link']`).click()

            cy.get(`div[title='Reset your password']`).should('have.text', 'Reset your password')
            cy.get(`button[name='submit'] span`).should('be.visible')
            cy.get(`button[name='submit'] span`).should('contain.text','Send email')
        })
    })
})


