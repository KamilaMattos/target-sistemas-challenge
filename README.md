# Teste Desenvolvedor - Target Sistemas

Este projeto é uma aplicação em Node.js/TypeScript utilizando Express e Jest, que inclui funcionalidades testadas para diversos serviços e controladores.

---

## **Pré-requisitos**

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) para gerenciar pacotes

---

## **Instalação do Projeto**

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-projeto
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```
   ou, caso esteja utilizando o yarn:
   ```bash
   yarn install
   ```

---

## **Configuração do Ambiente**

Não há variáveis de ambiente específicas para este projeto. No entanto, se necessário, crie um arquivo `.env` na raiz do projeto e adicione variáveis personalizadas conforme suas necessidades.

---

## **Scripts Disponíveis**

### **Iniciar o Servidor**

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

### **Executar Testes**

Para rodar todos os testes:

```bash
npm run test
```

---

## **Estrutura do Projeto**

A estrutura de pastas segue as melhores práticas de organização para projetos Node.js:

```
src/
├── controllers/     # Controladores da aplicação
├── services/        # Lógica de negócio
├── routes/          # Definição de rotas
├── tests/           # Arquivos de teste
├── data/            # Dados mockados
├── app.ts           # Configuração principal do Express
└── server.ts        # Inicialização do servidor
```

---

## **Endpoints Disponíveis**

### **1. Calcular Soma**

- **Rota**: `POST /api/question1`
- **Descrição**: Retorna o resultado da soma de números de 1 a 13.
- **Exemplo de Resposta**:
  ```json
  {
    "result": "O valor da variável SOMA será 91"
  }
  ```

### **2. Verificar Número Fibonacci**

- **Rota**: `POST /api/question2`
- **Descrição**: Verifica se um número pertence à sequência Fibonacci.
- **Corpo da Requisição**:
  ```json
  {
    "number": 21
  }
  ```
- **Exemplo de Resposta caso o número pertença à sequência Fibonacci**:
  ```json
  {
    "isFibonacci": true,
    "message": "O número 21 pertence à sequência Fibonacci!"
  }
  ```
  - **Exemplo de Resposta caso o número NÃO pertença à sequência Fibonacci**:
  ```json
  {
    "isFibonacci": false,
    "message": "O número 25 NÃO pertence à sequência Fibonacci!"
  }
  ```

### **3. Processar Dados de Faturamento**

- **Rota**: `GET /api/question3`
- **Descrição**: Retorna o menor, maior e dias acima da média do faturamento diário.
- **Exemplo de Resposta**:
  ```json
  {
    "minRevenue": 373.78,
    "maxRevenue": 48924.24,
    "daysAboveAverage": 10
  }
  ```

### **4. Calcular Percentuais de Faturamento**

- **Rota**: `GET /api/question4`
- **Descrição**: Calcula o percentual de representação do faturamento por estado.
- **Exemplo de Resposta**:
  ```json
  {
    "SP": 37.65,
    "RJ": 20.29,
    "MG": 16.17,
    "ES": 15.05,
    "Outros": 11.01
  }
  ```

### **5. Reverter String**

- **Rota**: `POST /api/question5`
- **Descrição**: Retorna a string de entrada invertida.
- **Corpo da Requisição**:
  ```json
  {
    "input": "hello"
  }
  ```
- **Exemplo de Resposta**:
  ```json
  {
    "reversed": "olleh"
  }
  ```

---

## **Rodando Testes**

Para rodar os testes unitários, execute:

```bash
npm run test
```

Os testes estão organizados na pasta `src/tests/` e incluem cenários para serviços e controladores.

---

Importando a Coleção Insomnia ou Postman

Para facilitar o teste da aplicação, você pode importar a coleção disponível no arquivo Insomnia_2025-01-11.json. Este arquivo contém todas as rotas configuradas e exemplos de requisição para o Insomnia ou Postman.

Passos para Importar no Insomnia:

Abra o Insomnia.

Clique no menu no canto superior esquerdo (Application ou File).

Selecione Import/Export > Import Data > From File.

Escolha o arquivo Insomnia_2025-01-11.json localizado na raiz do projeto.

Clique em Confirm.

Passos para Importar no Postman:

Abra o Postman.

Clique em Import no canto superior esquerdo.

Selecione a aba File.

Arraste o arquivo Insomnia_2025-01-11.json ou clique em Choose Files e selecione-o.

Clique em Import.

Agora, todas as rotas estarão configuradas e prontas para teste no Insomnia ou Postman.
