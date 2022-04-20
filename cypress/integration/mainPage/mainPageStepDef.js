/// <reference types="Cypress" />
import { HomePage } from '../../support/pageObjects/HomePage'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"


let homePage = new HomePage;

Given("I visit arstechnica main page", () => {
    homePage.visitHomePage()
})

When("I visit each link", () => {
    cy.log("Visiting each link")
})

Then("I am taken to the content selected", () => {
    homePage.validateUserIsTakenToContentSelected()
})

When("I click on Sign In link", () => {
    homePage.clickOnSignInLnk()
})

And("I perform Sign In", () => {
    homePage.performSignIn()
})

Then("I am able to click Profile Icon", () => {
    homePage.clickOnProfileIconLnk()
})

And("I see my username", () => {
    homePage.verifyUsernameIsShown()
})

When("I click on Sign Up button", () => {
    homePage.clickOnSignUpBtn()
})

Then("I am taken to register page", () => {
    homePage.verifyUserisTakenToRegisterPage()
})

And("I click on Having trouble link", () => {
    homePage.clickOnHavingTroubleLnk()
})

Then("I am taken to sendpassword page", () => {
    homePage.verifyUserisTakenToSendPasswordPage()
})







