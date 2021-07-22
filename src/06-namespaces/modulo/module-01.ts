/* eslint-disable @typescript-eslint/no-namespace */

namespace MeuNamespace {
  export const nome = 'Fulano';

  export class PessoaDoNomespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNomespace(nome);
  console.log(pessoa);
}

const pessoaDoNomespace = new MeuNamespace.PessoaDoNomespace('Marcos');
console.log(pessoaDoNomespace);
