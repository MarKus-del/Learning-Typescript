interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'fulano',
  sobrenome: 'da silva',
  idade: 20,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 147,
  sobrenome: 894,
  idade: 20,
};

console.log(aluno1, aluno2);
