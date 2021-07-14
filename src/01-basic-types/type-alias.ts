type Idade = number;

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorMCYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorMCYK;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

const pessoa: Pessoa = {
  nome: 'Marcos',
  idade: 20,
  salario: 1200,
  corPreferida: 'Azul',
};

export default 1;
