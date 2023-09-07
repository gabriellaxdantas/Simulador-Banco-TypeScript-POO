"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(titular_conta, id_conta, saldo_conta) {
        this.realizarDeposito = (valor) => {
            this.saldo_conta += valor;
            return this.saldo_conta += valor;
            console.log(`Você depositou: {$valor}, seu saldo atualizado é: {$saldo_conta}`);
        };
        this.realizarSaque = (valor) => {
            this.saldo_conta - valor;
            return this.saldo_conta;
            console.log(`Você sacou: {$valor}, seu saldo atualizado é: {$saldo_conta}`);
        };
        this.titular_conta = titular_conta;
        this.id_conta = id_conta;
        this.saldo_conta = saldo_conta;
    }
    setTodosAtributos(titular_conta, id_conta, saldo_conta) {
        this.titular_conta = titular_conta;
        this.id_conta = id_conta;
        this.saldo_conta = saldo_conta;
    }
    getTodosAtributos(titular_conta, id_conta, saldo_conta) {
        return this.titular_conta;
        return this.id_conta;
        return this.saldo_conta;
    }
}
exports.Conta = Conta;
