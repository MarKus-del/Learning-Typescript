function decorator(
  classPrototype: any,
  nomeMetodo: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
}

export class Pessoa {
  constructor(
    @decorator public nome: string,
    @decorator public sobrenome: string,
    @decorator public idade: number,
  ) {}

  metodo(@decorator msg: string): string {
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
