## API RestFull

#### sobre:
O projeto trata-se de uma api restfull respeitando todos os pontos declarados no escopo do desafio.
Foram utilizados como arquitetura o DDD(Domain Driven Development) e conceitos do SOLID e Clean Code. Trata-se de uma api feita em NodeJs + Typescript usando typeorm para gerenciar a relação de objetos e injeção de dependências, como banco de dados optei por usar o PostgreSql juntamente com o Docker.

#### Como usar: 
Assim que realizar o clone do projeto baixe suas dependencias usando
`yarn` ou `npm i`, logo após esta etapa vamos ao contêiner do banco de dados, para criar uma imagem do docker postgres use
`docker run --name vp_database -e POSTGRES_PASSWORD=Supri123tecno -p 5432:5432 -d postgres`.
Após concluir a criação do contêiner e realizar o start do mesmo vá ate a raiz
do projeto e execute as migrations usando `yarn typeorm migration:run` ou `npm run typeorm migration:run`, concluídos todos os passos vamos iniciar o projeto com `yarn dev:server` ou `npm run dev:server`

#### endpoints:


|Produtos     |Clientes                     |
|-------------|-----------------------------|
|`GET`:`http://localhost:3333/produtos`|`GET`:`http://localhost:3333/clientes`|
|`GET`:`http://localhost:3333/produtos/idDoProduto`|`GET`:`http://localhost:3333/clientes/idDoProduto`|
|`DELETE`:`http://localhost:3333/produtos/idDoProduto`|`DELETE`:`http://localhost:3333/clientes/idDoProduto`|
|`POST`:`http://localhost:3333/produtos`|`POST`:`http://localhost:3333/clientes`|
|`PUT`:`http://localhost:3333/produtos/idDoProduto`|`PUT`:`http://localhost:3333/clientes/idDoProduto`|
