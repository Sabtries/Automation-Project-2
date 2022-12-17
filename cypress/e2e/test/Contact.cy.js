import contactPage from "../pageobjects/contact.page"
cy.faker = require('faker')
import routesData from "../data/routes.data"

describe('Use various options on the Contact page', () =>{
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
    
    it('Verify that incomplete form will not be submitted', () => {
    
        contactPage.contactFormBad() //faker will complete form without message and submit
        
        cy.get(contactPage.errorMsg).should('be.visible') 
        cy.get(contactPage.errorMsg).should('contain.text', 'Field is required')
        cy.url().should('contain', routesData.contact)
    })

    it('Verify that completed form will be submitted', () => {
    
        contactPage.contactForm()//a faker is used to complete form and submit
        
        cy.get(contactPage.confirmation).should('be.visible')
        cy.get(contactPage.confirmation).should('contain.text', 'Message Sent!Your message has been sent!') 
    })

    it('Verify url for LinkedIn', () => {

        contactPage.contactViaLinkedIn()
        
        cy.get(contactPage.confirmation).should('not.be.visible')
        //verify that the link is present
        cy.get(contactPage.linkedinBtn).should('have.attr', 'href', 'https://www.linkedin.com/company/qualityworks-consulting-group-llc')
         

        
    })

})