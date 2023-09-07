export abstract class Conta {
    private titular_conta: string;
    private id_conta :number;
    private saldo_conta: number;

    constructor(titular_conta: string, id_conta: number, saldo_conta: number){
        this.titular_conta = titular_conta;
        this.id_conta = id_conta;
        this.saldo_conta = saldo_conta;
    }
    setTodosAtributos(titular_conta: string, id_conta: number, saldo_conta: number){
        this.titular_conta = titular_conta;
        this.id_conta = id_conta;
        this.saldo_conta = saldo_conta;
    }
    getTodosAtributos(titular_conta: string, id_conta: number, saldo_conta: number){
        return this.titular_conta;
        return this.id_conta;
        return this.saldo_conta;
    }

    realizarDeposito = (valor: number) => {
        this.saldo_conta  += valor;
        return this.saldo_conta;
        console.log(`Você depositou: {$valor}, seu saldo atualizado é: {$saldo_conta}`);
    }

    realizarSaque = (valor: number) => {
        this.saldo_conta - valor;
        return this.saldo_conta;
        console.log(`Você sacou: {$valor}, seu saldo atualizado é: {$saldo_conta}`);
    }


}