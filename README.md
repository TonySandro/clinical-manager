
# Clinical-Manager

API responsável pelo **gerenciamento de pacientes** e **anamnese psicopedagógica**. Faz parte da plataforma **NeuroPPAvalia**, sendo o módulo que centraliza o cadastro e acompanhamento clínico dos pacientes.

---

## 📌 Tecnologias utilizadas

- **Node.js** com **TypeScript**
- **Express.js** (roteamento)
- **TypeORM** (ORM para banco de dados)
- **MySQL** (banco de dados relacional)
- **Docker** (ambiente de containerização)
- **tsyringe** (injeção de dependências)

---

## 📂 Estrutura de Pastas

```
src/
├── controller/
├── service/
├── repositories/
├── dto/
├── model/
├── infra/
└── server.ts
```

---

## ✅ Funcionalidades disponíveis

### Pacientes
- **[POST] /patients** → Criar novo paciente
- **[GET] /patients/:id** → Obter paciente por ID
- **[PUT] /patients/:id** → Atualizar paciente
- **[DELETE] /patients/:id** → Remover paciente
- **[GET] /patients** → Listar todos os pacientes

### Anamnese Psicopedagógica
- **[POST] /anamnesis** → Criar nova anamnese
- **[GET] /anamnesis/:id** → Obter anamnese por ID
- **[PUT] /anamnesis/:id** → Atualizar anamnese
- **[DELETE] /anamnesis/:id** → Remover anamnese

---

## 🧪 Como executar localmente (desenvolvimento)

### Pré-requisitos:
- Node.js
- Yarn
- MySQL

### Instalação:

```bash
# Clonar o projeto
git clone https://github.com/TonySandro/clinical-manager.git

# Entrar na pasta
cd clinical-manager

# Instalar dependências
yarn ou npm i
```

### Configuração do Banco de Dados (MySQL):

Crie um banco de dados chamado `clinical_database`.

Configure o arquivo `.env`:

```
MYSQLDB_USER=root
MYSQLDB_ROOT_PASSWORD=suasenha
MYSQLDB_DATABASE=clinical_database
MYSQLDB_HOST=mysql
MYSQLDB_LOCAL_PORT=
MYSQLDB_DOCKER_PORT=3306
PORT=suaporta
```

### Rodando a aplicação:

```bash
yarn dev
```

---

## 📌 Padrões utilizados

- **MVC**
- **SOLID Principles**
- **DTO Pattern**
- **Repository Pattern**

