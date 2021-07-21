type ObterChaveFn = <O, K extends keyof O>(objeto: O, key: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  nome: 'Tom',
  raça: 'Gato vira-lata',
  cor: 'azul',
};

console.log(obterChave(animal, 'nome'));
console.log(obterChave(animal, 'cor'));
