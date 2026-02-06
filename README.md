# CRUD Node.js + Docker + CI/CD

Projeto completo contendo:
- API REST em Node.js (Express)
- CRUD com banco de dados SQLite
- Frontend simples em HTML consumindo a API
- Containerização com Docker
- Pipeline CI/CD com GitHub Actions
- Publicação automática da imagem no Docker Hub

Repositório:
https://github.com/santiagomachadoweb/crud-node-docker

Imagem Docker:
https://hub.docker.com/r/santiagomachadoweb10/crud-node

---

## Tecnologias utilizadas

- Node.js  
- Express  
- SQLite3  
- Docker  
- GitHub Actions (CI/CD)  
- HTML + JavaScript  

---

## Estrutura do projeto

crud-node-docker/  
├── public/  
│   └── index.html  
├── .github/  
│   └── workflows/  
│       └── ci.yml  
├── server.js  
├── package.json  
├── Dockerfile  
├── .dockerignore  
└── database.db (gerado automaticamente)

---

## Funcionalidades

- Criar usuários  
- Listar usuários  
- Atualizar usuários  
- Remover usuários  
- Interface web  
- Persistência em SQLite  
- Build automático de imagem Docker  
- Push automático para Docker Hub  

---

## Executar localmente (sem Docker)

### Pré-requisitos
Node.js instalado  
https://nodejs.org  

### Instalar dependências
No terminal, dentro da pasta do projeto:
npm install

### Executar aplicação
node server.js

### Acessar no navegador
http://localhost:3000

---

## Executar com Docker

### Build da imagem
docker build -t crud-node .

### Rodar container
docker run -p 3000:3000 crud-node

### Acessar
http://localhost:3000

---

## Executar imagem do Docker Hub

Imagem:
santiagomachadoweb10/crud-node

Rodar:
docker run -p 3000:3000 santiagomachadoweb10/crud-node

---

## Pipeline CI/CD

Arquivo:
.github/workflows/ci.yml

Fluxo:
1. Push na branch main  
2. GitHub Actions:
   - Checkout do código  
   - Login no Docker Hub  
   - Build da imagem  
   - Push da imagem  
   - Teste da API  

---

## Secrets necessários no GitHub

Configurar em:
Settings → Secrets and variables → Actions  

Criar:
DOCKER_USERNAME  
DOCKER_PASSWORD  

---

## Endpoints da API

POST /users  
Body:
{
  "name": "João",
  "email": "joao@email.com"
}

GET /users  

PUT /users/:id  
Body:
{
  "name": "Novo Nome",
  "email": "novo@email.com"
}

DELETE /users/:id  

---

## Arquitetura

Navegador  
↓  
API Node.js  
↓  
SQLite  
↓  
Docker  
↓  
GitHub Actions  
↓  
Docker Hub  

---

## Uso no dia a dia

Para desenvolver:
node server.js  
ou  
docker run -p 3000:3000 santiagomachadoweb10/crud-node  

Para publicar alterações:
git add .  
git commit -m "mensagem"  
git push  

Pipeline roda automaticamente.

---

## Referências

Node.js: https://nodejs.org  
Express: https://expressjs.com  
SQLite: https://www.sqlite.org  
Docker: https://docs.docker.com  
GitHub Actions: https://docs.github.com/actions  

---

## Licença

Projeto educacional para estudo e demonstração de CI/CD.
