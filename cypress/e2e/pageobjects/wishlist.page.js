
class WishList {

    get favoritesBtn(){
        return ('#top-favorite > .chakra-text')
    }

    get heading() {
        return ('.chakra-heading.css-11cq7yk')
    }

    get emptyMsg() {
        return ('.chakra-text.css-jneyc')
    }

    get pillowFave() {
        return (`div[id='product-4'] div[class='css-1m8iww1']`)
    }

    get removePillow() {
        return (':nth-child(1) > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru > #remove-favorite-btn')
    }

    get confirmFave() {
        return ('#chakra-toast-manager-top-right') 
    }

    get favoriteCount() {
        return (`button[id='top-favorite'] p[class='chakra-text css-0']`)
    }

    get mousepadGalleryFave(){
        return (`div[id='product-2'] div[class='css-1m8iww1']`)
    }

    get mousepadImg() {
        return (`div[id='product-2'] div[class='chakra-aspect-ratio css-791950']`)
    }

    get mousepadFave() {
        return ('#add-to-favorite')
    }

    get removeMouseFave() {
        return ('#remove-from-favorite')
    }

    get stylishFave() {
        return (`div[id='product-14'] div[class='css-1m8iww1']`)
    }

    get stylishShoeImg() {
        return (`div[id='product-14'] div[class='chakra-aspect-ratio css-791950']`)
    }

    addPillowtoFave() {
        cy.get(this.pillowFave).click()
    }

    addMousepadtoFave() {
        cy.get(this.mousepadImg).click()
        cy.wait(2000)// wait for new page to load
        cy.get(this.mousepadFave).click()
    }

    removePillowFromFave() {
        cy.get(this.pillowFave).click()
        cy.get(this.mousepadImg).click()
        cy.wait(2000)// wait for new page to load
        cy.get(this.mousepadFave).click() //click the item favorite button
        cy.get(this.favoritesBtn).click()  // click the favorite button to direct to favorite page
        cy.get(this.removePillow).click() // remove an item from the favorite page
    }

    removeMousepadFave() {
        cy.get(this.mousepadGalleryFave).click() //add an item to favorite from the product gallery
        cy.get(this.mousepadImg).click()
        cy.get(this.removeMouseFave).click() //remove the item to favorite from the product detail
    }

    stylishShoeFave() {
        cy.get(this.stylishFave).click()  
    }
}

export default new WishList()