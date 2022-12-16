
class CartFlow {

    get macbookPro() {
        return (`.chakra-image.css-2i84d9[src='https://images.pexels.com/photos/4260477/pexels-photo-4260477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']`)
    }

    get price() {
        return(`body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > p:nth-child(2)`)
    }

    get cartAdd() {
        return (`#add-to-cart`)
    }

    get increaseAmt() {
        return (`#product-increase`)
    }

    get title() {
        return (`div[class='chakra-stack css-84zodg'] h2[class='chakra-heading css-1dklj6k']`)
    }

    get quantity() {
        return (`[class='chakra-numberinput__field css-a8qclj']`)
    }

    get cartQuantity() {
        return (`.snipcart__font--secondary.snipcart__font--regular`)
    }

    get cartAmount() {
        return (`button[class*='secondary snipcart__font--bold'] `)
    }

    get pillow() {
        return (`.chakra-button.snipcart-add-item.css-betff9[data-item-id='quality-pillow']`)
    }

    get decrementBtn() {
        return (`button[title='Decrement quantity']`)
    }

    get deleteBtn() {
        return (`button[title='Remove item']`)
    }

    get total() {
        return (`[class*='amount--highlight snipcart__font--large']`)
    }

    get backButton() {
        return (`[class="snipcart-modal__close-title snipcart__font--std"]`)
    }



    addPillow() {
        cy.get(this.pillow).click()
    }

    selectMacbook(){
        cy.get(this.macbookPro).click()
    }

    increaseProductAmt() {
        cy.get(this.increaseAmt).click()
    } 

    addLaptopToCart() {
        cy.get(this.cartAdd).click()
    }

    decreaseQuantity() {
        cy.get(this.decrementBtn).click()
    }

    navigateToPageDetail() {
        cy.get(this.backButton).click()
    }

    deleteFromCart() {
        cy.get(this.deleteBtn).click()
    }

}
export default new CartFlow()