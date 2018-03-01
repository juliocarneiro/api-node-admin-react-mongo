# API Node.JS

## Recursos Utilizados no Desenvolvimento:

- Node.Js;
- Express.Js
- MongoDb & MLab;
- ES6;
- Babel (Transpiler);
- Visual Studio Code;
- Json data (para retornar os dados);
- PostMan (testar a API criada);

## Testando a Aplicação no Postman:
Caso queira testar as API's criadas no projeto, primeiro baixe o [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).
Depois de realizar o download do Postman, basta agora realizar os passos abaixo para 
poder testar cada API criada!

## Executar Localmente

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

## Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **MongoDb**: Caso também não tenha, basta realizar o download [Aqui](https://www.mongodb.com/download-center#community)

### Instalando as Dependências (via Windows):

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução: **(dentro do src)**

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas e definidas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

## Instalação dos Programas via Linux:

Estarei disponibilizando os links onde explicam como baixar:

- Node.Js: [AQUI](https://nodejs.org/en/download/package-manager/)
- MongoDb: [AQUI](https://docs.mongodb.com/v3.0/administration/install-on-linux/)

## Padrão das Rotas Criadas: 

Procurando seguir o padrão e design das API's, segue abaixo as URI's das rotas desenvolvidas:

obs.: api de exemplo através do site: https://jsonplaceholder.typicode.com

 ROTA                      |     HTTP(Verbo)   |      Descrição                |      Links (via PostMan)                 
-------------------------  | ----------------- | ---------------------         | ---------------------------------------- 
/posts                    |       GET         | Selecionar Todos os Posts     | GET:    http://localhost:8000/api/posts     
/posts                     |       POST        | Criar um Post                 | POST:   http://localhost:8000/api/posts
/posts/:id             |       GET         | Selecionar Por Id             | GET:    http://localhost:8000/posts/:id
/posts/:titulo             |       GET         | Selecionar Por Titulo            | GET:    http://localhost:8000/posts/:titulo
/posts/:id            |       PUT         | Atualizar Por Id              | PUT:    http://localhost:8000/posts/:id   
/posts/:id           |       DELETE      | Excluir Por Id                | DELETE: http://localhost:8000/posts/:id

### Executando a Aplicação

Primeiro, você precisará abrir um terminal na sua máquina e iniciar o MongoDb (caso conecte localmente). Basta digitar na tela do cmd o seguinte comando:

```
mongod
```

Depois, abre um outro terminal, para iniciar a aplicação. Para isso, basta iniciar o server para o projeto ser executado localmente. (via nodemon)

```
npm start
```

Caso o MongoDb esteja devidamente instalado em sua máquina, ele iniciará o serviço mostrando que a port 27017 foi iniciada.

Agora, abre a página da aplicação em `http://localhost:8000/admin`. E pronto a aplicação será executada de maneira local na sua máquina.  

Se tudo der certo, deverá apresentar a seguinte mensagem:

```
Bem Vindo(a) a API Restful
```

**documentação em desenvolvimento**


