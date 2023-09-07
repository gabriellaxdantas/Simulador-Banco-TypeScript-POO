"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPessoaFisica = void 0;
const Conta_1 = require("./Conta");
class ContaPessoaFisica extends Conta_1.Conta {
    constructor(numero_cpf, titular_conta, id_conta, saldo_conta) {
        super(titular_conta, id_conta, saldo_conta);
        this.limiteCartaoCredito = () => {
            const limite = this.numero_cpf * 5;
            console.log(`O seu limite de crédito é: ${limite}`);
            return limite;
        };
        this.numero_cpf = numero_cpf;
    }
    setNumeroCpf(numero_cpf) {
        this.numero_cpf = numero_cpf;
    }
    getNumeroCpf(numero_cpf) {
        return this.numero_cpf;
    }
}
exports.ContaPessoaFisica = ContaPessoaFisica;
