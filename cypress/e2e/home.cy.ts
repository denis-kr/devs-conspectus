import HomePage from "../pages/HomePage";

describe("Home page", () => {
  it("deve exibir o logo e o link de documentação", () => {
    HomePage.visit();
    HomePage.getLogo().should("be.visible");
    HomePage.getDocsLink().should("be.visible");
  });
});


