import { Conta } from './classes/Conta';
import { ContaPessoaFisica } from './classes/ContaPessoaFisica';
import { ContaPessoaJuridica } from './classes/ContaPessoaJuridica';

const contaGabriella = new ContaPessoaFisica(123456, 'Gabriella Dantas', 1, 10);
console.log(contaGabriella);


const contaLojaDoPovo = new ContaPessoaJuridica(12345678, 'Lojão do povo', 2, 2000000);
console.log(contaLojaDoPovo);



