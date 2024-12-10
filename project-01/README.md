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


