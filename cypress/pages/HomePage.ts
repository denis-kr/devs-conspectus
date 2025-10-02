export class HomePage {
  visit() {
    cy.visit("/");
  }

  getLogo() {
    return cy.get('img[alt="Next.js logo"]');
  }

  getDocsLink() {
    return cy.contains("Read our docs");
  }
}

export default new HomePage();


