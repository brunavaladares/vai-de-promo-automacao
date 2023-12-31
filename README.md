<h1>Testes automatizados com Cypress - Fluxos do Site Vai de Promo</h1>

Seja bem-vindo(a)!


<h2>Objetivo do Projeto</h2>

O projeto desenvolvido visa automatizar fluxos básicos de testes do Site Vai de Promo, compra de passagens aérea e compra de seguro viagem. Os testes foram desenvolvidos com o framework Cypress.

Na tela de Passagens aéreas, criado Automação do fluxo de compra de passagem, com a forma de pagamento Pix.

Na tela de Seguro viagem, criado Automação do fluxo de compra de seguro viagem, com a forma de pagamento Cartão de crédito, incluindo cupom de desconto no momento da compra.

<h2>Pré-requisitos</h2>

Validar que os seguintes sistemas estejam instalados em seu computador.

- Node.js 
- NPM 

Obervação: Para verificar as versões Node.js e NPM instaladas, executar o comando node --version && npm --version no seu terminal de linha de comando.

<h2>Clonar o projeto</h2>

Abra o navegador, acesse a URL [https://github.com/brunavaladares/vai-de-promo-automacao](https://github.com/brunavaladares/vai-de-promo-automacao) clique no botão Code, escolha uma opção de clone (HTTPS ou SSH), copie o link de clone do projeto, e no terminal de linha de comando, execute o comando git clone [cole-o-link-copiado-aqui].

Após o clone do projeto, acesse o diretório recém clonado (ex.: cd vai-de-promo-automacao).

Dentro do diretório vai-de-promo-automacao terá os sub-diretórios, cypress, cypress.config.js, os arquivos .gitignore (arquivo oculto), package-lock.json, package.json e README.md.

<h2>Instalação das dependências</h2>

Com o projeto clonado, pode instalar as dependências de desenvolvimento.

Visto que as dependências já estão listadas no arquivo package.json, basta executar o comando na raiz do projeto:

<h6>npm install</h6> 

Para baixar o cypress como dependência do projeto:

<h6>npm i cypress --save-dev</h6> 

<h2>Aplicação</h2>

As principais funcionalidades da aplicação Vai de Promo é pesquisar valores promocionais de passagens aéreas das companhias, e também fornecer o produto seguro viagem.

<h2>Os testes desenvolvidos</h2>

<h3>Foi desenvolvido testes end-to-end automatizado. São eles:</h3>

- Geração de pedido do produto Seguro viagem com a forma de pagamento Cartão de crédito; 
- Geração de pedido do produto Passagem aérea com a forma de pagamento Pix;
- Inserção de cupom de desconto na tela de pagamento do produto Seguro Viagem;

<h2>Executar os testes automatizados</h2>

Após seguir os pré-requisitos citados acima, para executar a automação de testes execute no terminal de linha de comando (ou no atalho do VS Code):

- npx cypress open →  Permite que o usuário veja a interação direta do navegador.

Irá abrir uma aba de navegador, deve clicar na opção E2E Testing, e escolher o browser de sua preferência.

- npm test → Permite que o usuário execute os testes em modo headless.

Todos os dados utilizados nos testes foram criados especificamente para os testes.


