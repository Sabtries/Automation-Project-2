
class pageGallery {
   
    get homeBtn () {
        return (`#top-home`);
    }

    get cartIcon () {
        return (`button[class='chakra-button snipcart-checkout css-186fne3']`);
    }

    get summary () {
        return (`.snipcart-cart-header__title.snipcart__font--black.snipcart__font--secondary`)
    }

    get jeanPants() {
        return (`button[type='button'][data-item-id='quality-pants-3']`)
    }

    get addHoodedSweatshirt () {
        return (`button[data-item-id='quality-sweatshirt-hooded']`);
    }

    get hoodedSweatshirtImg () {
        return (`.chakra-image.css-2i84d9[src='/images/quality-sweatshirt-hooded.jpg']`);
    }

    get amtHoodedSweatshirt () {
        return (`div[id='product-5'] input[value='1']`);
    }

    get Iframe () {
        return (`.css-k68dew`);
    }

    get signOutBtn () {
        return (`#top-sign-out`);
    }

    playVideo(){
        cy.get(this.Iframe).click()
    }
    
    addSweatshirtToCart(){
        cy.get(this.addHoodedSweatshirt).click()
    }

    increaseAmt(){
        cy.get(this.amtHoodedSweatshirt).clear().type('2')
    }

    checkCart(){
        cy.get(this.cartIcon).click()
    }

    signOutUser(){
        cy.get(this.signOutBtn).click()
    }

    addJeanPants(){
        cy.get(this.jeanPants).click()
    }
    
}

export default new pageGallery()
