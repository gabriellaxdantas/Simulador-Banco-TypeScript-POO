import {Conta} from "./Conta"

export class ContaPessoaJuridica extends Conta{
    private numero_cnpj: number;

    constructor(numero_cnpj: number, titular_conta: string, id_conta: number, saldo_conta: number){
        super(titular_conta, id_conta, saldo_conta)
        this.numero_cnpj = numero_cnpj;
    }

    setNumeroCnpj (numero_cnpj: number){
        this.numero_cnpj = numero_cnpj;
    }
    getNumeroCpf (numero_cnpj: number){
        return this.numero_cnpj;
    }

    limiteEmprestimo= () => {
        const limite = this.numero_cnpj * 7;
        console.log(`O seu limite de emprestimo é: ${limite}`);
        return limite;
    }
}