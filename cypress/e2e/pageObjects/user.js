class user {
  userLogin(url, user, pass) {
    cy.visit(url)
    cy.get('input[id="username"][name="username"]').type(user)
    cy.get('input[id="password"][name="password"]').type(pass)
    cy.get('button[id="clogs-captcha-button"]').click()
  }
  userLogout() {
    cy.get('a[class="dropdown-toggle user-menu"]').click()
    cy.get('i[class="fa fa-sign-out"]').click()
  }
}

module.exports = new user();