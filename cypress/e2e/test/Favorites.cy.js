import wishListPage from "../pageobjects/wishList.page"

describe('Complete Favorite/Wishlist on webpage', () => {

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

    it('Add an item to favorite from product gallery page', () => {
        
        wishListPage.addPillowtoFave()

        cy.get(wishListPage.confirmFave).should('contain.text', 'Quality Pillow added to favorites') 
        cy.get(wishListPage.favoriteCount).should('be.visible')
        cy.get(wishListPage.favoriteCount).should('contain.text', '1')
    })

    it('Add multiple items to favorite ', () => {
        
        wishListPage.addPillowtoFave() // add from product gallery 
        cy.wait(1000)
        cy.get(wishListPage.confirmFave).should('contain.text', 'Quality Pillow added to favorites')

        wishListPage.addMousepadtoFave() // add from product gallery 
        cy.get(wishListPage.confirmFave).should('contain.text', 'Quality Mousepad added to favorites')
        
      
        cy.get(wishListPage.favoriteCount).should('be.visible')
        cy.get(wishListPage.favoriteCount).should('contain.text', '2') //confirms both items were added
    })

    it('Remove an item to favorite from favorites page', () => {
     
        wishListPage.removePillowFromFave()  //remove an item from two favorites

        cy.get(wishListPage.confirmFave).should('contain.text', 'Quality Pillow added to favorites')
        cy.get(wishListPage.confirmFave).should('contain.text', 'Quality Mousepad added to favorites')
        cy.get(wishListPage.confirmFave).should('contain.text', 'Quality Mousepad removed from favorites') //confirm the item was removed     
        cy.get(wishListPage.favoriteCount).should('be.visible')
        cy.get(wishListPage.favoriteCount).should('contain.text', '1') //verify that only one item remains
    })

    it('Remove an item from favorite on the product detail page', () => {
        
        //add an item to favorite from the product gallery and remove it from the product detail page
        wishListPage.removeMousepadFave() 
    
        cy.get(wishListPage.confirmFave).should('contain.text', 'Quality Mousepad removed from favorites')
        cy.get(wishListPage.favoriteCount).should('be.visible')
        cy.get(wishListPage.favoriteCount).should('contain.text', '0')
    })

    it.only('Remove an item from favorite on the product gallery page', () => {
        
        wishListPage.stylishShoeFave() // clicks the favorite button on the product gallery page
        cy.get(wishListPage.confirmFave).should('contain.text', 'Quality Stylish Shoes added to favorites')
        cy.get(wishListPage.favoriteCount).should('contain.text', '1') //confirm the item was added

        wishListPage.stylishShoeFave() // clicks the favorite button again to remove item
        cy.get(wishListPage.confirmFave).should('contain.text', 'Quality Stylish Shoes removed from favorites') //confirm the item was removed
        cy.get(wishListPage.favoriteCount).should('contain.text', '0')
    })


})