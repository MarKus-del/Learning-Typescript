export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 2));
console.log(add('a', 9));

type Animal = { tipo: 'animal'; cor: string };
type Pessoa = { tipo: 'pessoa'; nome: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
  tipo: 'pessoa' = 'pessoa';
}

function mostraNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;

    case 'animal':
      console.log('Isso é um animal ' + obj.cor);
      return;
  }
}

mostraNome(new Aluno('Fulano'));
mostraNome({ tipo: 'animal', cor: 'Rosa' });
