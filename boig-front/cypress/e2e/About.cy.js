describe("About", () => {
  it("should navigate to the about page", () => {
    cy.visit("localhost:3000/about");
  });
  it("should find the about header", () => {
    cy.visit("localhost:3000/about");
    cy.get("[data-test=about-header]").contains(/about/i);
  });
});
