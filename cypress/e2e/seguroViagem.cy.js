/// <reference types="cypress" />

describe('Fazer validação de fluxos básicos no site Vai de Promo opção Seguros Viagem', () => {

    const vaiDePromo = 'main';
    const popupPromocao40 = '[data-smart-inject-id="BOX_89735417-b503-4adb-8cc0-3d02bb4664ce_HTML"]';
    const fecharPopup = '[id="Layer_1"]';
    const titleSeguroViagem = '.styles_mainMenu__JMB8_ > :nth-child(2) > a';
    const popupCupomExclusivo20 = '.bGGcZJZR7IsEsQjTbspD-content-wrapper';
    const fecharPopupCupom = '.bGGcZJZR7IsEsQjTbspD-html-close-button';
    const inputDestino = '[id="destination_input"]';
    const optionEuropa = '.styles_children__CP61b > :nth-child(3)';
    const inputEmbarque = '[data-cy="departure"]';
    const dataDeEmbarque = ':nth-child(3) > .vdp-ui-daterangepicker-days-container > :nth-child(2)';
    const inputDesembarque = '[data-cy="arrival"]';
    const dataDeDesembarque = ':nth-child(3) > .vdp-ui-daterangepicker-days-container > :nth-child(30)';
    const inputNome = '.styles_inputGroup__taah0 > :nth-child(1) > .vdp-ui-input-external > .vdp-ui-input-container > .vdp-ui-input-group > [data-cy="name"]';
    const inputEmail = '.styles_inputGroup__taah0 > :nth-child(2) > .vdp-ui-input-external > .vdp-ui-input-container > .vdp-ui-input-group > [data-cy="email"]';
    const inputCelular = '[name="phone"]';
    const buttonEncontrarSeguroViagem = '[data-cy="submit"]';
    const seguroViagem = '.Xr5qn3tEGsruxxZiI8g_';
    const dadosDeCompraDeSeguro = '.uMMRgfE5yogtrntZ8aQO';
    const nomeCompletoSegurado = '[name="insureds.0.name"]';
    const dataNascimentoSegurado = '[name="insureds.0.birthdate"]';
    const cpfSegurado = '[name="insureds.0.cpf"]';
    const cupomDesconto = '[name="coupon"]';
    const buttonAplicar = '[data-cy="button-coupon"]';
    const messagemErroCupomInvalido = '.vdp-ui-input-error-label';
    const inputNomeCompletoDadosCompra = '[name="contact.name"]';
    const inputEmailDadosCompra = '[name="contact.email"]' ;
    const inputTelefoneContatoDadosCompra = '[name="contact.phone"]';
    const inputCep = '[name="contact.cep"]';
    const inputNumero = '[name="contact.number"]';
    const inputOptionCartaoDeCredito = '.jXWtu4HWAsq8CKida0vC > :nth-child(2)';
    const inputNumeroDoCartao = '[name="payment.card"]';
    const inputNomeDoTitularDoCartao = '[name="payment.name"]';
    const cpfDoTitular = '[name="payment.cpf"]';
    const inputDataDeValidade = '[name="payment.date"]'; 
    const inputCVV = '[name="payment.cvv"]';
    const quantidadeDeParcelas = '[data-cy="select-parcels"]';
    const optionQuantidadedeParcelas3x = '.vdp-ui-select-options > :nth-child(3) > p';
    const buttonFinalizarPagamento = '[data-cy="finalizar-pagamento"]';
    const numeroPedido = '.bvCcHmyn6I2VfdwTY1Sw > h4';

    beforeEach(() => {
      cy.viewport(1280, 720)
      })

    it('Gerar pedido de Seguro Viagem com forma de pagamento Cartão de Crédito', () => {
      cy.visit('https://www.vaidepromo.com.br');
  
      cy.get(vaiDePromo).should('exist').should('be.visible');
      cy.get(popupPromocao40).should('be.visible').get(fecharPopup).should('be.visible').click();
      cy.get(titleSeguroViagem).should('be.visible').click();
      cy.get(popupCupomExclusivo20).should('be.visible').get(fecharPopupCupom).should('be.visible').click();
      cy.get(inputDestino).should('be.visible').click().get(optionEuropa).should('be.visible').click();
      cy.get(inputEmbarque).should('be.visible').click().get(dataDeEmbarque).should('be.visible').click();
      cy.get(inputDesembarque).should('be.visible').click().get(dataDeDesembarque).should('be.visible').click();
      cy.get(inputNome).should('be.visible').type('Daniela Ferreira Silva').should('be.visible');
      cy.get(inputEmail).should('be.visible').type('danielaferreira@gmail.com').should('be.visible').click();
      cy.get(inputCelular).should('be.visible').type('11985462536').should('be.visible').click();
      cy.get(buttonEncontrarSeguroViagem).should('be.visible').should('be.enabled').click();

      cy.get(seguroViagem).should('exist').should('be.visible');
      cy.contains('button', 'Selecionar seguro').should('be.visible').should('be.enabled').click();
      
      cy.get(dadosDeCompraDeSeguro).should('exist').should('be.visible');  
      cy.get(nomeCompletoSegurado).should('be.visible').type('Daniela Ferreira Silva').should('be.visible');
      cy.get(dataNascimentoSegurado).should('be.visible').type('08041991').should('be.visible');
      cy.get(cpfSegurado).should('be.visible').type('79749473060').should('be.visible');

      // Inserção de Cupom de Desconto //  

      cy.get(cupomDesconto).should('be.visible').type('AMOPROMO');
      cy.get(buttonAplicar).should('be.visible').should('be.enabled').click();
      cy.get(messagemErroCupomInvalido).should('have.text', 'Cupom inválido... Insira outro cupom!'); 
      cy.get(cupomDesconto).click().clear();

      cy.get(inputNomeCompletoDadosCompra).should('be.visible').type('Daniela Ferreira Silva').should('be.visible');
      cy.get(inputEmailDadosCompra).should('be.visible').type('danielaferreira@gmail.com').should('be.visible');
      cy.get(inputTelefoneContatoDadosCompra).should('be.visible').type('11985462536').should('be.visible');
      cy.get(inputCep).should('be.visible').type('04235200').should('be.visible');
      cy.get(inputNumero).should('be.visible').type('1456').should('be.visible');
      cy.get(inputOptionCartaoDeCredito).should('be.visible').click();
      cy.get(inputNumeroDoCartao).should('be.visible').type('5214410917400105').should('be.visible');
      cy.get(inputNomeDoTitularDoCartao).should('be.visible').type('Daniela Ferreira Silva').should('be.visible');  
      cy.get(cpfDoTitular).should('be.visible').type('79749473060').should('be.visible');
      cy.get(inputDataDeValidade).should('be.visible').type('122024').should('be.visible');
      cy.get(inputCVV).should('be.visible').type('963').should('be.visible');
      cy.get(quantidadeDeParcelas).should('be.visible').click();
      cy.get(optionQuantidadedeParcelas3x).should('be.visible').click();
      cy.get(buttonFinalizarPagamento).should('be.visible').should('be.enabled').click();  
      cy.get(numeroPedido).should('be.visible');  
      
    }) 
  })
  