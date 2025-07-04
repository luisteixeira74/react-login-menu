# React Shopping + API com MySQL e Autenticação Simples

Este projeto é uma aplicação de exemplo que integra um frontend React com backend Node.js, utilizando um banco de dados MySQL para armazenar produtos. 

---

## Funcionalidades

- Listagem de produtos com paginação simples.
- Controle básico de autenticação via Context API no React.
- Frontend React consumindo a API via Axios.
- Layout responsivo usando Tailwind CSS.

---

## Atenção

- **Ainda não há tabela de usuários nem cadastro.**
- O sistema utiliza dados fixos para login comentados no arquivo `.env.example`.
- É necessário copiar o `.env.example` para `.env` e ajustar variáveis de ambiente.

---

## Como rodar

1. Clone este repositório.
2. Copie o arquivo `.env.example` para `.env`
3. Rode os containers Docker:

```bash
docker compose up --build
