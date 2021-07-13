function criaErro(): never {
  throw new Error('Erro qualquer');
}

try {
  criaErro();
} catch (e) {
  console.log(e);
}
