
import sortData from "../data/sort.data";
import sortProductsPage from "../pageobjects/sortProducts.page";

describe('Sort product gallery page', () => {
        beforeEach (() => {
         cy.visit('/')
         cy.get('#signInOrRegister').click()
    
         cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', { args: {} }, ({}) => {
            
            //Login user with valid email and password
            cy.get(`input[id*='email']`).type('thomie@gail.co')
            cy.get(`[id='1-password']`).type('WordPass1')
            cy.get(`button[type="submit"]`).click()
            cy.wait(3000)
            })
        })

     it('Sort products from High to Low', () => {

        sortProductsPage.sortItems(sortData.sort['High to Low'])

        //Sort the data list based on price, from high to low
        sortData.products.sort((a, b) => b.price - a.price)

        cy.get(sortProductsPage.productPrices).each(($elem, index) => {
        expect($elem.text()).equal(`$${sortData.products[index].price}`)
        })
    })

    it('Sort products from low to high', () => {

        sortProductsPage.sortItems(sortData.sort['Low to High'])

        //Sort the data list based on price, from high to low
        sortData.products.sort((a, b) => a.price - b.price )

        cy.get(sortProductsPage.productPrices).each(($elem, index) => {
        expect($elem.text()).equal(`$${sortData.products[index].price}`)
        })
    })

    it('Sort products list from A to Z', () => {

        sortProductsPage.sortItems(sortData.sort['A to Z'])

        //Sort the data list based on name, from A to Z
        sortData.Products.sort()

        cy.get(sortProductsPage.productName).each(($elem, index) => {
        expect($elem.text()).equal(sortData.Products[index].name)
        })
    })

    

})