export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static falaOi(): void {
    console.log('OI');
  }

  static criaPessoa(nome: string, sobrenome: string) {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = Pessoa.criaPessoa('Fulano', 'da silva');
console.log(pessoa);
pessoa.metodoNormal();
Pessoa.falaOi();
