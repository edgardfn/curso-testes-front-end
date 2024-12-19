describe("Testa a página de Dashboard", () => {
    it("Deve carregar uma lista com 3 pokemons", () => {
        cy.visit("/dashboard");

        cy.intercept('GET', 'http://localhost:3000/pokemon', {
            fixture: "pokemons.json"
        });

        cy.contains("Pikachu");
        cy.contains("Rotom");
        cy.contains("Charmander");
    });

    it("Quando clicar em um pokemon deve abrir a página de detalhes e depois volta para a lista de pokemon", () => {
        cy.visit("/dashboard");

        cy.intercept('GET', 'http://localhost:3000/pokemon', {
            fixture: "pokemons.json"
        });

        cy.intercept('GET', 'http://localhost:3000/pokemon/1', {
            fixture: "pokemon-detail.json"
        });

        cy.contains("Pikachu").click();
        cy.contains("Voltar").click();

        cy.contains("Pikachu");
        cy.contains("Rotom");
        cy.contains("Charmander");
        
    })  
})