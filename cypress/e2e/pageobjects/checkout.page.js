import faker from 'faker'


class CompleteOrder{


    get checkOutBtn() {
        return (`button[class='snipcart-button-primary snipcart-base-button is-icon-right']`)
    }

    get fullName() {
        return (`[name='name']`)
    }

    get eMail() {
        return (`[name='email']`)
    }

    get streetAddress() {
        return (`[name = "address1"]`)
    }

    get apptOrSuite() {
        return (`#address2_faeba779-4cef-4c85-ad75-f49722eabeaf`)
    }

    get city() {
        return (`[name='city']`)
    }

    get country() {
        return (`.snipcart-typeahead input`)
    }

    get province() {
        return (`.snipcart-typeahead input`)
    }

    get zip() {
        return (`[name='postalCode']`)
    }

    get continueBtn() {
        return (`button[type='submit']`)
    }

    get titleOfPage() {
        return (`.snipcart-billing-completed__title`)
    }

    get paymentIframe() {
        return (`#snipcart-checkout-step-billing`)
    }

    get placeOrderBtn() {
        return (`button[type='submit']`)
    }

    get invoice() {
        return (`.snipcart-order__invoice-number--highlight.snipcart__font--black.snipcart__font--secondary`)
    }

    get totalSum() {
        return (`.snipcart-summary-fees__amount.snipcart-summary-fees__amount--highlight.snipcart__font--large`)
    }

    get confirmation() {
        return (`:nth-child(2) > .snipcart__font--subtitle`)
    }

    get backToProducts() {
        return (`.snipcart-cart-header__close-button.snipcart-modal__close`)
    }

    get continueShopping() {
        return ('.snipcart-button-primary')
    }

    continueCheckout() {
        cy.get(this.checkOutBtn).click()
    }


    continueToPayment() {
        cy.get(this.continueBtn).click()
    }

    
    //
    completeBilling(name, email, street, area, Country, state, code){

        name = faker.name.findName()
        email = faker.internet.email()
        street = faker.address.streetAddress()
        area = faker.address.city()
        //Country = faker.address.country()  //to be entered by force outside of faker
        state= faker.address.state()
        code = faker.address.zipCode()


        cy.get(this.checkOutBtn).click()
        cy.wait(2000)//wait for page to load 
        cy.get(this.fullName).type(name)
        cy.get(this.eMail).type(email)
        cy.get(this.streetAddress).type(street)
        cy.get(this.city).type(area)
        cy.get(this.country).eq(0).type('United States{enter}',{force: true}) //forces the text to be inputted in selected field
        cy.get(this.province).eq(1).type('Florida',{force: true})
        cy.get(this.zip).type(code)
        cy.get(this.continueBtn).click()
    }

    //complete the payment 
    makePayment() {
        cy.iframe('.snipcart-payment-card-form > iframe').find('#card-number').type('4242 4242 4242 4242')
        cy.iframe('.snipcart-payment-card-form > iframe').find('#expiry-date').type('0926')
        cy.iframe('.snipcart-payment-card-form > iframe').find('#cvv').type('123')
    }

    //complete the payment and direct to the confirmation page
    confirmPaymemt() { 
        cy.iframe('.snipcart-payment-card-form > iframe').find('#card-number').type('4242 4242 4242 4242')
        cy.iframe('.snipcart-payment-card-form > iframe').find('#expiry-date').type('0926')
        cy.iframe('.snipcart-payment-card-form > iframe').find('#cvv').type('123')
        //cy.wait(1000)
        cy.get(this.placeOrderBtn).click() //test was passing initially but began giving a click().click() error, even recognizing that the assserted element was found
        //cy.wait(1000)
    }

}
export default new CompleteOrder()