export const obj1: Record<string, string> = {
  nome: 'marcos',
  sobrenome: 'rodrigues',
};

console.log(obj1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;
// Partial
type PessoaPartial = Partial<PessoaRequired>;
// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;
// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const pessoaOpcional: PessoaPartial = {
  nome: 'marcos',
  sobrenome: 'rodrigues',
};

const pessoaObrigatoria: PessoaRequired = {
  nome: 'marcos',
  sobrenome: 'rodrigues',
  idade: 20,
};

const pessoaReadonly: PessoaReadonly = {
  nome: 'marcos',
  sobrenome: 'rodrigues',
  idade: 20,
};

console.log(pessoaOpcional);
console.log(pessoaObrigatoria);
console.log(pessoaReadonly);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

// exclui todos os items que estão nos dois conjuntos
type TypeExclude = Exclude<ABC, CDE>;

// extrai todos os item que estão nos dois conjuntos
type TypeExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'sa1vsa53v4asasfvasvgshfdrtjha',
  nome: 'marcos',
  idade: 20,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

console.log(mapAccount(accountMongo));
