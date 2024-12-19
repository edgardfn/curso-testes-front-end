describe('Testa a página de login', () => {
  it('Quando clicar em login deve ir para a página de dashboard e ter um pokemon Pikachu', () => {
    cy.visit('/');

    cy.intercept('GET', 'http://localhost:3000/pokemon', {
      fixture: 'pokemons.json'
    })

    cy.contains('Login').click();
    cy.contains('Dashboard');
    cy.contains('Pikachu');
  });

  it('Quando clicar em Sign Up deve ir para a página de cadastro', () => {
    cy.visit('/');

    cy.contains('Não tem cadastro? Clique aqui!').click();
    cy.contains('Cadastre-se');
  })
})