- instalar bibliotecas;

npm i @testing-library/jest-dom @testing-library/react @testing-library/user-event @vitest/coverage-v8 jsdom vitest path -D

-------------------------------------------

- na raiz do projeto criar arquivo 'vitest.config.ts':

-------------------------------------------

- dentro do ./src criar arquivo 'vitest-env.d.ts':

-----------------------------------------

- dentro do ./src criar arquivo 'setupTests.ts':

-------------------------------------------

- adicionar scrips no package.json:

--------------------------------------------
- coverage é para saber o quanto do código ja foi testado e falta testar;

--------------------------------------------

npm run tests

npm run tests:coverage

-------------------------------------

Mocks:
O que é um mock ?
Uma simulação de um objeto, função ou módulo usado para substituir o comportamento real durante os testes.

Por que usar Mocks ?
- Isolação: permite isolar o código sendo testado, eliminando dependências externas.
- Controle: Facilita a simulação de comportamento específicos para testar cenários diversos.
- Eficiência: Evita a execução de código desnecessário, como chamadas a Apis externas, melhorando a velocidade dos teste.

-------------------------------------

O que é TDD ?

TDD, ou Desenvolvimento Orientado por Testes, é uma abordagem de desenvolvimento de software onde os testes automatizados são escritos antes mesmo da implementação do código de produção.

-------------------------------------

Processo Do TDD:
1- Escrever um Teste: Começamos escrevendo um teste automatizado que define o comportamento esperado de uma parte do código.
2- Falhar o Teste: Como ainda não implementamos o código correspondente, o teste inicialmente falhará.
3- Implementar o código de produção: Em seguida, escrevemos o código mínimo necessário para fazer o teste passar.
4- Passar o Teste: Executamos o teste novamente e garantimos que ele passe com sucesso.
5- Refatorar o código: Uma vez que o teste esteja passando, podemos refatorar o código e melhorar sua qualidade, mantendo os teste sempre verdes.

-------------------------------------





