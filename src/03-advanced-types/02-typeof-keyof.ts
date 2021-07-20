type CoresObj = typeof coresObj;
type CoresChave = keyof CoresObj;

const coresObj = {
  azul: 'blue',
  verde: 'green',
  vermelho: 'red',
};

function traduzirCor(cor: CoresChave, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('verde', coresObj));
