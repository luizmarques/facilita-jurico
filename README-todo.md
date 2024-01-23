Requisitos:
  - Node.js
  - PostgreSQL
  - React

---------------------------------------------------------------------------------

Requisitos não funcionais:
  - Não utilizar ORMs.
  - Criar documentação com Swagger.
  - Executar a aplicação com um único comando.
    - docker compose
    - dockerfile
    - dev container
    - CI/CD

---------------------------------------------------------------------------------

Objetivo:
  - calcular rota da empresa (0,0) passando por todos os clientes listados com a menor distancia possível e retornar ao ponto de partida .
  - Criar modal simples para exibir a ordem de visitação.

---------------------------------------------------------------------------------

Parte I
Gerenciar Clientes:

- Criar clientes
- listar clientes
- Criar DDL para consultas na API
- Testes unitários

---------------------------------------------------------------------------------

Parte II
Cacular rotas de visitação:

- Alterar cadastro de clientes:
  - Adicionar dois campos X e Y para as coordenadas
  - Atualizar DDL para consultas na API
  
- Implementar o google maps para ser consumido pelo frontend
- Calcular rota de atentimento com menor trajeto
- Testes unitários

---------------------------------------------------------------------------------

Rotas da API:

POST http://localhost:3000/customers

GET http://localhost:3000/customers/1

GET http://localhost:3000/customers


migration command:
npx prisma migrate dev