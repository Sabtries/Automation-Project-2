# Automation-Project-2
# How to run tests in this project

This file will explain how to interact with this project. It is to be noted that this project was done earnestly so I ask that you the user of the following engage it with much patience and understanding. Thank you in advance. 

## Installation
Install the following in main.

To Initialize folder with NPM use:   npm init -y

To install Cypress with NP, use:   npm install cypress --save-dev

To run cypress for the first time, use:  npx cypress open 
 
To install reporter use: npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator 

Then enter npm install --save-dev npm-run-all

To install faker use: npm install faker --save-dev

```

## Commands and Edits

**To run tests in the browser
npx cypress run

**To run a specific test with the reporter
npm run test:spec cypress/e2e/test/testName.cy.js 

**To run a specific test without the report
npx cypress run --spec cypress/e2e/test/testName.cy.js 

choose --headed   or --headless 



To switch branches enter:
git checkout main 
git checkout *the branch name


Authentication branch 
enter git checkout Authentication to start testing this branch
in test case 1. the email has to be changed each time it is ran. Change the first letter of the email from t to e or another letter of your choice.
To test for this file enter command above. 
or 
To run test for all test git checkout main and enter command above. 


Run tests above for the following test suites 
AddtoCart branch  
Search branch