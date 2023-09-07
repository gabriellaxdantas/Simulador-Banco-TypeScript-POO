"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContaPessoaFisica_1 = require("./classes/ContaPessoaFisica");
const ContaPessoaJuridica_1 = require("./classes/ContaPessoaJuridica");
const contaGabriella = new ContaPessoaFisica_1.ContaPessoaFisica(123456, 'Gabriella Dantas', 1, 10);
console.log(contaGabriella);
const contaLojaDoPovo = new ContaPessoaJuridica_1.ContaPessoaJuridica(12345678, 'Lojão do povo', 2, 2000000);
console.log(contaLojaDoPovo);
contaGabriella.realizarDeposito(150);
