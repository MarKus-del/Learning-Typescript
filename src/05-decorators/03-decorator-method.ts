function decorator(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
  return {
    value: function (...args: any[]) {
      return args[0].toUpperCase();
    },
  };
}

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
  ) {}

  @decorator
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;

    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new Pessoa('fulano', 'da silva', 20);

const metodo = pessoa.metodo('ola Mundo');
console.log(metodo);
