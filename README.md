# Sistema Financeiro Pessoal – API REST #

API REST para gestão de usuários, categorias e transações financeiras, feita como atividade acadêmica.
Permitir o cadastro e consulta de dados de um sistema financeiro pessoal, utilizando arquitetura MVC.
---
# Tecnologias e Frameworks Utilizados

Node.js – Plataforma JavaScript de back-end
Express – Framework minimalista para rotas e middlewares HTTP
Sequelize – ORM para abstração de comandos SQL
dotenv – Variáveis ​​de ambiente
MariaDB – SGBD utilizado via HeidiSQL como interface visual e gerencial
Postman – Testes de requisições HTTP e validação de endpoints

# Banco de Dados
HeidiSQL foi utilizado apenas como interface visual para facilitar a manipulação e visualização dos dados, mas o banco é o MariaDB.
O banco deve ser criado manualmente (nome sugerido: financeiro).
As tabelas e comandos são criados automaticamente pelo Sequelize ao rodar o projeto.

# Como Rodar a API

```
git clone https://github.com/cleidesales/Finance-API.git
```
```
cd https://github.com/cleidesales/Finance-API.git
```
```
npm install
```
Crie um arquivo .env na raiz do projeto com o conteúdo:
```
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=financeiro
DB_HOST=localhost
DB_DIALECT=mysql
```
Crie o banco de dados:
Use o HeidiSQL para criar o banco financeiro(ou substitua por outro nome e ajuste no .env).
Inicie o servidor:
```
node app.js
```
# Endpoints

/usuarios(GET/POST).

/categorias(GET/POST).

/transacoes(GET/POST).

# Testes via Postman
1. Requisições de:
   Criar categoria
Método: POST http://localhost:3000/categorias
Corpo (JSON):
```
{
  "descricao": "Alimentação",
  "status": 1
}
```
Criar usuário
Método: POST http://localhost:3000/usuarios
Corpo (JSON):
```
{
  "username": "Cleidi",
  "password": "123",
  "nome": "Cleidi Sales",
  "email": "cleidi@email.com"
}
```
Criar Transação
Método: POST http://localhost:3000/transacoes
Body (JSON) (colocar usuarioside e categoriasidcom com ids já criados):
```
{
  "descricao": "Mercado",
  "data": "2025-11-05",
  "valor": 100.00,
  "tipo": 2,
  "usuariosid": 1,
  "categoriasid": 1
}
```
2. Consultas:

GET http://localhost:3000/usuarios

GET http://localhost:3000/categorias

GET http://localhost:3000/transacoes
