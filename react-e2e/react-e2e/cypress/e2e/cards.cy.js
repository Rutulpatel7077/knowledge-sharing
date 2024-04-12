describe("Cards Component Tests", () => {
  it("loads and displays vehicle data", () => {
    let vehiclesCount = 0;
    cy.wait(10000);
    cy.visit("/vehicles");
    cy.request("https://api.bhadegadi.com/v2/vehicles")
    .then((res) => {
      vehiclesCount = res.body.DataList.length;
    });
    cy.get(".card").should("have.length", vehiclesCount);
  });
});
