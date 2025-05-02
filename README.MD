# 🛡️ API de Autenticação com JWT (Node.js + Express + MongoDB)

Este projeto é uma aplicação backend com autenticação de usuários via **JWT**, utilizando **Node.js**, **Express** e **MongoDB**, seguindo uma arquitetura em camadas.

## 📁 Estrutura de Diretórios

.

├── app.js

├── controllers

├── database

├── middlewares

├── models

├── node_modules

├── package.json

├── package-lock.json

├── README.MD

├── requests

├── routes

└── services

## ⚙️ Instalação

```bash
git clone https://github.com/Gustavo-Cruzz/AV2FullStack.git
cd seu-repo
npm install
``` 

Crie um arquivo .env com os seguintes valores:

```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/backendApp
JWT_SECRET=sua_chave_secreta
```

## ▶️ Execução
Ambiente de desenvolvimento:

```bash
npm run dev

Ambiente de produção:

npm start
```

## 🧪 Testes via Terminal

A pasta requests/ contém scripts de testes automatizados com curl. Para executá-los, use:

chmod +x requests/*.sh  # (apenas uma vez para tornar executáveis)
./requests/register_success.sh

## 🔍 Lista de testes incluídos:
Teste	Arquivo
✅ Registro bem-sucedido	          register_success.sh
❌ E-mail duplicado	                register_email_duplicado.sh
❌ Senha inválida	                  register_senha_invalida.sh
❌ E-mail inválido	                register_email_invalido.sh
❌ JSON mal formatado (registro)	  register_mal_formatado.sh
✅ Login bem-sucedido	              login_success.sh
❌ Login com e-mail não cadastrado	login_email_invalido.sh
❌ Login com senha errada	          login_senha_errada.sh
❌ JSON mal formatado (login)	      login_mal_formatado.sh
✅ Acesso com token válido	        protected_token_valido.sh
❌ Acesso sem token	                protected_sem_token.sh
❌ Acesso com token inválido	      protected_token_invalido.sh
❌ Token mal formatado	            protected_mal_formatado.sh

---

## 📚 Recurso: Livros Lidos (`Book`)

Usuários autenticados podem gerenciar sua própria lista de livros lidos. Cada livro contém:

* **Título** (`title`)
* **Autor** (`author`)
* **Valor** (`value`)
* **Nota (1 a 10)** (`rating`)
* **Análise textual** (`analysis`)

---

---

## 📌 Endpoints disponíveis

| Método | Rota             | Descrição                            |
| ------ | ---------------- | ------------------------------------ |
| POST   | `/api/books`     | Cria um novo livro                   |
| GET    | `/api/books`     | Lista todos os livros do usuário     |
| GET    | `/api/books/:id` | Detalha um livro específico          |
| PUT    | `/api/books/:id` | Atualiza todos os dados de um livro  |
| PATCH  | `/api/books/:id` | Atualiza parte dos dados de um livro |
| DELETE | `/api/books/:id` | Remove um livro                      |

---

## 🧪 Testes de livros com curl

Scripts na pasta `requests/`:

| Arquivo                          | Descrição                                         |
| -------------------------------- | ------------------------------------------------- |
| `book_create_success.sh`         | Criação de livro bem-sucedida                     |
| `book_create_sem_token.sh`       | Tentativa sem token                               |
| `book_create_dados_invalidos.sh` | Envio com dados inválidos                         |
| `book_get_all.sh`                | Listar todos os livros                            |
| `book_get_by_id.sh`              | Ver detalhes de um livro                          |
| `book_update_put.sh`             | Atualização total via PUT                         |
| `book_update_patch.sh`           | Atualização parcial via PATCH                     |
| `book_delete.sh`                 | Remoção de livro                                  |
| `book_get_outro_usuario.sh`      | Teste de acesso indevido a livro de outro usuário |

---

## ✅ Boas práticas atendidas

* JWT obrigatório em todas as rotas
* Dados isolados por usuário
* Validações de campos
* CRUD completo implementado
* Respostas e status HTTP apropriados
* Logs no console de ações e erros
* Uso de variáveis de ambiente com `.env`

---


## 🧾 Licença

Este projeto está sob a licença MIT. 
