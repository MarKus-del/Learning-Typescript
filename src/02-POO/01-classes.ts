export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostraColaboradores(): Colaborador[] {
    return this.colaboradores;
  }
}

class Udemy extends Empresa {
  constructor() {
    super('Udemy', '00.000.000/0000-00');
  }

  pop(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Facebook', '12.568.781/1265-95');
const empresa = new Udemy();
const colaborador1 = new Colaborador('Fulano', 'da silva');

empresa.adicionaColaborador(colaborador1);
console.log(empresa);

const colaboradorRemovido = empresa.pop();
console.log(colaboradorRemovido);

console.log(empresa);
