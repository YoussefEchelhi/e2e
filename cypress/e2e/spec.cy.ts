beforeEach(() =>{
  cy.visit("/");
});

  it('input exist', () => {
    cy.get('input').should('exist');
  })

  it('input placeholder', () => {
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Skriv titel här')   
  });

  it('button exist', () => {
    cy.get('button').contains('Sök').should('exist');
  })

  it("type in input", () => {
    cy.get("input").type("Lord").should("have.value", "Lord");
  });

  it("show error text when input is empty", ()=> {
    cy.get("button").click();
    cy.get("p").contains("Inga sökresultat att visa").should("exist");
  });

  it("show error text when seraching other thing than movies ", () => {
    cy.get("input").type("Medieinstitutet").should("have.value", "Medieinstitutet")
    cy.get("button#search").click();
    cy.get("p").contains("Inga sökresultat att visa").should("exist")
  });

  it("should get 10 movies from API ", ()=> {
    cy.get("input").type("lord").should("have.value","lord");
    cy.get("button").click();
    cy.get("div>div").should("have.length", 10);
  });
  

