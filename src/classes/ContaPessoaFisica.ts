import {Conta} from "./Conta"

export class ContaPessoaFisica extends Conta {
    private numero_cpf: number;

    constructor(numero_cpf: number, titular_conta: string, id_conta: number, saldo_conta: number){
        super(titular_conta, id_conta, saldo_conta)
        this.numero_cpf = numero_cpf;
    }

    setNumeroCpf (numero_cpf: number){
        this.numero_cpf = numero_cpf;
    }
    getNumeroCpf (numero_cpf: number){
        return this.numero_cpf;
    }

    limiteCartaoCredito = () => {
        const limite = this.numero_cpf * 5;
        console.log(`O seu limite de crédito é: ${limite}`);
        return limite;
    }

}