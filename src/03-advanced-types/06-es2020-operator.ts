type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Algum titulo',
  texto: 'o texto',
};

// Encadeamento opcional
console.log(documento.data?.toDateString());

// Operador de coalescência nula
console.log(documento.data?.toDateString() ?? 'Ixi, não existe data.');
