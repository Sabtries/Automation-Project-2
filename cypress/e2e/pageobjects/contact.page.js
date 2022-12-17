import faker from 'faker'

class ContactPage {

    get contactBtn() {
        return ('#top-contact')
    }

    get heading() {
        return (`.chakra-heading.css-z59od`)
    }

    get qualityWorksEmail() {
        return (`acy.get('[href="mailto:info@qualityworkscg.com"]`)
    }

    get linkedinBtn() {
        return (`a[href='https://www.linkedin.com/company/qualityworks-consulting-group-llc']`)
    }

    get twitterBtn() {
        return (`acy.get('[href="https://twitter.com/qualityworkscg"]`)
    }

    get christianName() {
        return ('#firstName')
    }

    get surname() {
        return ('#lastName')
    }

    get emailAddress() {
        return ('#email')
    }

    get subject() {
        return ('#subject')
    }

    get message() {
        return ('#message')
    }

    get sendMessageBtn() {
        return (`button[class='chakra-button css-vs0e4t']`)
    }

    get confirmation() {
        return ('#chakra-toast-manager-bottom')
    }

    get errorMsg() {
        return (`div[id='field-:ra:-feedback']`)
    }

    
    contactFormBad(fname, lname, mail, title) {
        fname= faker.name.firstName() 
        lname= faker.name.lastName()
        mail= faker.internet.email()
        title= faker.lorem.sentence()
        

        cy.get(this.contactBtn).click() //direct to contact page
        cy.get(this.christianName).type(fname)
        cy.get(this.surname).type(lname)
        cy.get(this.emailAddress).type(mail)
        cy.get(this.subject).type(title)
        cy.get(this.sendMessageBtn).click() 
    }

    contactForm(fname, lname, mail, title, note) {
        fname= faker.name.firstName() 
        lname= faker.name.lastName()
        mail= faker.internet.email()
        title= faker.lorem.sentence()
        note= faker.lorem.paragraph()
        

        cy.get(this.contactBtn).click() //direct to contact page
        cy.get(this.christianName).type(fname)
        cy.get(this.surname).type(lname)
        cy.get(this.emailAddress).type(mail)
        cy.get(this.subject).type(title)
        cy.get(this.message).type(note)
        cy.get(this.sendMessageBtn).click() 
    }

    contactViaEmail() {
        cy.get(this.qualityWorksEmail).click()
    }

    contactViaTwitter() {
        cy.get(this.twitterBtn).click()
    }

    contactViaLinkedIn(){
        cy.get(this.contactBtn).click() //direct to contact page
        cy.get(this.linkedinBtn)
    }
    
}
export default new ContactPage()
