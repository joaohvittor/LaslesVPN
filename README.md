```markdown
# LaslesVPN

LaslesVPN é um projeto de site que utiliza Bootstrap para a criação de interfaces modernas e responsivas, com foco em serviços de VPN. Este repositório contém a estrutura do projeto, incluindo a parte de front end e back end, bem como a integração com um banco de dados MySQL.

## Estrutura do Projeto

```

LaslesVPN/
│
├── front-end/
│   ├── css/
│   ├── img/
│   ├── js/
│   ├── index.html
│   ├── signin.html
│   └── signup.html
│
└── back-end/
    ├── database/
    │   └── laslesvpn.sql
    ├── app.js
    └── package.json

```

## Funcionalidades

- Cadastro de Usuários: Os usuários podem se cadastrar informando nome, email e senha.
- Login de Usuários: Validação de login utilizando email e senha.
- Banco de Dados: Armazenamento das informações dos usuários em um banco de dados MySQL.

## Instalação

### Requisitos

- Node.js
- MySQL
- NPM

### Passos para Instalação

1. Clone o repositório:
   bash
   git clone https://github.com/joaohvittor/LaslesVPN.git
   cd LaslesVPN
```

2. **Instale as dependências do back end:**

   ```bash
   cd back-end
   npm install
   ```
3. **Configure o banco de dados:**

   - Crie um banco de dados MySQL e importe o arquivo `laslesvpn.sql` que está na pasta `database/`.
   - O arquivo `laslesvpn.sql` contém as instruções para a criação da tabela `usuarios` e inserção de dados de exemplo.
4. **Inicie o servidor:**

   ```bash
   node app.js
   ```
5. **Acesse o front end:**

   - Abra o arquivo `index.html` em um navegador.

## Como Usar

- **Cadastro de Usuário**: Acesse a página de cadastro (`signup.html`), preencha os campos e envie o formulário.
- **Login de Usuário**: Acesse a página de login (`signin.html`), insira suas credenciais e clique em "Entrar".

## Tecnologias Utilizadas

- **Front End**: HTML, CSS, JavaScript, Bootstrap
- **Back End**: Node.js, Express
- **Banco de Dados**: MySQL

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```

```
