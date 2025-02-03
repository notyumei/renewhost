import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import user from "../../../pageObjects/user";

// Global variables
const newUrl = Cypress.env('url')
const newUser1 = Cypress.env('USER')
const newPass1 = Cypress.env('PASS')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

// Login before each Scenario
beforeEach(() => { 
    user.userLogin(newUrl, newUser1, newPass1)
})

// Logout after each Scenario
afterEach(() => { 
    user.userLogout()
})

// Feature: Renew NoIP Hostname

// Scenario: Renew Hostname
Given ("I'm in Dashboard page", () => {
    cy.contains("Dashboard")
})
When ("I click on Dynamic DNS", () => {
    cy.get('span[class="mm-text mmc-dropdown-delay animated fadeIn"]').contains('Dynamic DNS').click()
})
Then ("I click on No-IP Hostnames", () => {
    cy.get('span[class="mm-text"]').contains('No-IP Hostnames').click()
})
When ("I'm in Hostname page", () => {
    cy.contains("Hostname")
})
Then ("I click on Confirm", () => {
    cy.get('button[class="btn btn-labeled btn-success"]').click()
})
Then ("I should see the hostname as Active", () => {
    cy.get('a[class="no-link-style popover-info popover-colorful popover-dark"]').contains('Active')
})