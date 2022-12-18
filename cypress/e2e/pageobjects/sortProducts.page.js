
class SortProduct{

    get sortBtn() {
        return ('#sort')
    }

    get productPrices() {
        return (`.css-1ieohnc > .chakra-text`)
    }

    get productName() {
        return (`p[class= "chakra-text css-1n64n71"]`)
    }

    get itemCategory() {
        return (`[class='css-1ccau2i']`)
    }


    //selects specific sort options from the sort dropdown 
    sortItems(sort) { 
        cy.get(this.sortBtn).select(sort)
        cy.wait(2000)//wait for page to update and load
    }

}

export default new SortProduct()