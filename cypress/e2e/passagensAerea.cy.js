/// <reference types="cypress" />

describe('Fazer compra de passagem aérea no site Vai de Promo', () => {

    const vaiDePromo = 'main';
    const inputPartida = '[name="departure"]';
    const inputChegada = '[name="arrival"]';
    const popupPromocao40 = '[data-smart-inject-id="BOX_89735417-b503-4adb-8cc0-3d02bb4664ce_HTML"]';
    const fecharPopup= '[id="Layer_1"]';
    const dataDeIda = '[id="departureDate"]';
    const dataDeIdaEscolhida = ':nth-child(3) > .vdp-ui-daterangepicker-days-container > :nth-child(10)';
    const dataDeVolta = '[id="returnDate"]';
    const dataDeVoltaEscolhida = ':nth-child(3) > .vdp-ui-daterangepicker-days-container > :nth-child(17)';
    const botaoProximoMes = '[data-cy="next-calendar-month-button"]';
    const inputNumerodePassageirosEClasse = 'input[value="1 passageiro, Econômica"]';
    const buttonEncontrarVoos = 'button[data-cy="submitAirSearch"]';
    const campoDeOndeVoceVaiSair = '.lgC69bWTZnqK05O6TJ2_ > .vdp-ui-air-search > .vdp-ui-air-search__form > :nth-child(1) > .vdp-ui-air-search__form__input-group > :nth-child(1) > .vdp-ui-container-label > .vdp-ui-input-external > .vdp-ui-input-container > .vdp-ui-input-group > [data-cy="departure"]';
    const campoParaOndeVoceVai = '.lgC69bWTZnqK05O6TJ2_ > .vdp-ui-air-search > .vdp-ui-air-search__form > :nth-child(1) > .vdp-ui-air-search__form__input-group > :nth-child(3) > .vdp-ui-container-label > .vdp-ui-input-external > .vdp-ui-input-container > .vdp-ui-input-group > [data-cy="arrival"]';
    const inputNomeCompleto = '[name="contact.fullName"]';
    const inputEmail = '[name="contact.email"]';
    const inputCelular = '[name="contact.phone"]';
    const inputNomePassageiro = '[name="passengers.0.firstName"]';
    const inputSobrenomePassageiro = '[name="passengers.0.lastName"]';
    const inputCPFPassageiro = '[name="passengers.0.document"]';
    const inputDataDeNascimentoPassageiro = '[name="passengers.0.birthDate"]';
    const inputSexo = '[data-cy="passenger0gender"]';
    const optionMasculino = '.vdp-ui-select-options > :nth-child(1)';
    const inputCelularPassageiro = '[name="passengers.0.phone"]';
    const inputEmailPassageiro = '[name="passengers.0.email"]';
    const optionPix = '[data-cy="paymentSelectedPix"]'; 
    const nomeCompletoDaPessoaPagadora = '[name="payment.pix.fullName"]';
    const cpfDaPessoaPagadora = '[name="payment.pix.document"]';
    const buttonConfirmarPagamento = '[data-cy="comprar-button"]';
    const numeroPedido = '.vFelR9N9g53e8DU4KtK2 > :nth-child(3)';
    
    beforeEach(() => {
      cy.viewport(1280, 720)
      })
  
    it('Gerar pedido de passagem aérea com forma de pagamento PIX', () => {
      cy.visit('https://www.vaidepromo.com.br');
  
      cy.get(vaiDePromo).should('exist').should('be.visible');
      cy.get(inputPartida).should('be.visible').type('Guarulhos, São Paulo, SP (GRU)');
      cy.get(inputChegada).should('be.visible').type('Todos os aeroportos, Belo Horizonte, MG (BHZ)');
      cy.get(popupPromocao40).should('be.visible').get(fecharPopup).should('be.visible').click();
      cy.get(dataDeIda).should('be.visible').click().should('be.enabled');
      cy.get(botaoProximoMes).should('be.visible').click();
      cy.get(dataDeIdaEscolhida).should('be.visible').click();
      cy.get(dataDeVolta).should('be.visible').click().should('be.enabled');
      cy.get(dataDeVoltaEscolhida).should('be.visible').click();
      cy.get(inputNumerodePassageirosEClasse).should('be.visible');
      cy.get(buttonEncontrarVoos).should('be.visible').should('be.enabled').click();
      
      cy.get(campoDeOndeVoceVaiSair).should('be.visible').type('Guarulhos, São Paulo, SP (GRU)');
      cy.get(campoParaOndeVoceVai).should('be.visible').type('Todos os aeroportos, Belo Horizonte, MG (BHZ)');
      cy.contains('button', 'Comprar').should('be.visible').should('be.enabled').click();
  
      cy.get(inputNomeCompleto).should('be.visible').type('João Martins Sousa').should('not.be.null');
      cy.get(inputEmail).should('be.visible').type('joaomartins@gmail.com').should('not.be.null');
      cy.get(inputCelular).should('be.visible').type('11948526933').should('not.be.null');
      cy.get(inputNomePassageiro).should('be.visible').type('João').should('not.be.null');
      cy.get(inputSobrenomePassageiro).should('be.visible').type('Sousa').should('not.be.null');
      cy.get(inputCPFPassageiro).should('be.visible').type('56060671020').should('not.be.null');
      cy.get(inputDataDeNascimentoPassageiro).should('be.visible').type('08061980').should('not.be.null');
      cy.get(inputSexo).should('be.visible').click();
      cy.get(optionMasculino).should('be.visible').click();
      cy.get(inputCelularPassageiro).should('be.visible').type('11948526933').should('not.be.null');
      cy.get(inputEmailPassageiro).should('be.visible').type('joaomartins@gmail.com').should('not.be.null');
      
      cy.get(optionPix).should('be.visible').click();
      cy.get(nomeCompletoDaPessoaPagadora).should('be.visible').type('João Martins Sousa').should('not.be.null');
      cy.get(cpfDaPessoaPagadora).should('be.visible').type('56060671020').should('not.be.null');
      cy.get(buttonConfirmarPagamento).should('be.visible').should('be.enabled').click();
      cy.get(numeroPedido).should('be.visible');
  
    }) 
  })
  