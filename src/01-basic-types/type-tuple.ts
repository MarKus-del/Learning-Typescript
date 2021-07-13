const dadosClientes: [number, string, string?] = [1, 'Marcos'];

dadosClientes[2] = 'Rodrigues';

const array1: readonly string[] = ['Maçã', 'Pera'];
const array2: ReadonlyArray<string> = ['Maçã', 'Pera'];

console.log(array1);
console.log(array2);
