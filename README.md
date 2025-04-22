# BackEnd-Users.Posts

Este projeto é uma API para gerenciamento de usuários e posts. Ele permite criar, ler, atualizar e excluir usuários e posts, além de gerenciar o relacionamento entre eles.

## Funcionalidades

- **Usuários**:
    - Listar todos os usuários.
    - Listar um usúario pelo ID
    - Criar um novo usuário.    
    - Atualizar informações de um usuário.
    - Excluir um usuário.

- **Posts**:
    - Listar todos os posts.
    - Listar um post pelo ID
    - Criar um novo post.
    - Atualizar um post existente.
    - Excluir um post.

- **Relacionamento**:
    - Associar posts a usuários.
    - Listar posts de um usuário específico.

## Tecnologias Utilizadas

- **Linguagem**: [Node.js](https://nodejs.org/)
- **Framework**: [Express](https://expressjs.com/)
- **Banco de Dados**: [PostgreSQL](https://www.postgresql.org/)

## Instalação

1. Clone o repositório:
     ```bash
     git clone https://github.com/seu-usuario/BackEnd-Users.Posts.git
     ```
2. Acesse o diretório do projeto:
     ```bash
     cd BackEnd-Users.Posts
     ```
3. Instale as dependências:
     ```bash
     npm install
     ```
4. Configure as variáveis de ambiente no arquivo `.env`.

## Uso

1. Inicie o servidor:
     ```bash
     npm start
     ```
2. Acesse a API em `http://localhost:3000`.

## Endpoints

### Usuários
- `GET /users` - Lista todos os usuários.
- `GET /users/:id` - Lista um usuário pelo ID
- `POST /users` - Cria um novo usuário.
- `PUT /users/:id` - Atualiza um usuário.
- `DELETE /users/:id` - Exclui um usuário.

### Posts
- `GET /posts` - Lista todos os posts.
- `GET /posts/:id` - Lista um post pelo ID
- `POST /posts` - Cria um novo post.
- `PUT /posts/:id` - Atualiza um post.
- `DELETE /posts/:id` - Exclui um post.

### Relacionamento
- `GET /users/:id/posts` - Lista os posts de um usuário.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
