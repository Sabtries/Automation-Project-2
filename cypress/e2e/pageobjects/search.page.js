class SearchProducts {

    get searchField() {
        return (`#search`)
    }

    get category() {
        return (`#category`)
    }

    get mousepadImg() {
        return (`img[src='/images/quality-mousepad.jpg']`)
    }

    get mousepadCart() {
        return ('#add-to-cart')
    }

    get mousepadPrice() {
        return ('.chakra-stack.css-1ieohnc')
    }

    get noProduct() {
        return ('.css-12qzrsi')
    }

    get cargo() {
        return ('.chakra-text.css-1n64n71')
    }

    get tag() {
        return ('.css-1ccau2i')
    }

    get addCargo() {
        return ('#add-to-cart')
    }

    enterSearch(info) {
        cy.get(this.searchField).type(info)
    }

    selectCategory(word) {
        cy.get(this.category).type(word)
    }

}
export default new SearchProducts()