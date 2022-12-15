
class Authenticate {


    get googleSignIn () {
        return (`div[class='auth0-lock-social-button-text']`)
    }

    get forgotPassword () {
        return (`a[class='auth0-lock-alternative-link']`)
    }

    get submitLogin () {
        return (`//button[@id='1-submit']`)
    }

    get signUpBtn () {
        return ('.auth0-lock-form')
    }

    get googleSignUp () {
        return ('.auth0-lock-social-button-text')
    }

    get inputEmail () {
        return (`[name='email']`)
    }

    get inputPassword () {
        return (`[id='1-password']`)
    }

    get submitSignUpbtn () {
        return (`button[type="submit"]`)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    loginUser (email, password) {
        cy.get(this.inputEmail).type(email)
        cy.get(this.inputPassword).type(password)
        cy.get(this.submitLogin).click() 
    }

    signUpUser (eMail, passWord) {
        cy.get(this.inputEmail).type(eMail)
        cy.get(this.inputPassword).type(passWord)
        cy.get(this.submitSignUpbtn).click() 
    }
    resetPassword
    

}

export default new Authenticate()
