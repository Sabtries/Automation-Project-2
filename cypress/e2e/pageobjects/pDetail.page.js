class DetailedPage {

    get hoodedSweatshirtImg () {
        return (`.chakra-image.css-2i84d9[src='/images/quality-sweatshirt-hooded.jpg']`);
    }

    get backBtn () {
        return (`.chakra-heading.css-18j379d`);
    }

    get switchImg () {
        return (`li[class='dot']`);
    }

    get imageTwo () {
        return (`.carousel-status`);
    }

    get addToCart () {
        return (`.chakra-button.snipcart-add-item.css-betff9`);
    }

    get cart() {
        return (`.snipcart-item-quantity__total-price.snipcart__font--bold.snipcart__font--secondary`)
    }

    get homeBtn () {
        return (`#top-home`);
    }

    get Iframe () {
        return (`.css-k68dew`);
    }



    goToDetailPage() {
        cy.get(this.hoodedSweatshirtImg).click()
    }

    backToMain() {
        cy.get(this.backBtn).click()
    }

    imageSwitch() {
        cy.get(this.switchImg).click()
    }

    addSweatshirt() {
        cy.get(this.addToCart).click()
    }

}
export default new DetailedPage()