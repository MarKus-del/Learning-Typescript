function invertNomeECor(param1: string, param2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: T) {
    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(frase: string): string {
        return frase.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

@invertNomeECor('Valor1', 'Valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

const animal = new Animal('lagarta', 'roxo');
console.log(animal);
