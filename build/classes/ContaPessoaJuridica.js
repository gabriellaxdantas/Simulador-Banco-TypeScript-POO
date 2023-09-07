"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPessoaJuridica = void 0;
const Conta_1 = require("./Conta");
class ContaPessoaJuridica extends Conta_1.Conta {
    constructor(numero_cnpj, titular_conta, id_conta, saldo_conta) {
        super(titular_conta, id_conta, saldo_conta);
        this.limiteEmprestimo = () => {
            const limite = this.numero_cnpj * 7;
            console.log(`O seu limite de emprestimo é: ${limite}`);
            return limite;
        };
        this.numero_cnpj = numero_cnpj;
    }
    setNumeroCnpj(numero_cnpj) {
        this.numero_cnpj = numero_cnpj;
    }
    getNumeroCpf(numero_cnpj) {
        return this.numero_cnpj;
    }
}
exports.ContaPessoaJuridica = ContaPessoaJuridica;
