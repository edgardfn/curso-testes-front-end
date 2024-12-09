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
