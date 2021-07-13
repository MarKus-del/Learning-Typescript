/* eslint-disable */
const nome: string = 'luiz';
const idade: number= 15;
const adulto: boolean = true;
const simbolo: symbol = Symbol("qualquer-simbal");
// const big: bigint = 9007n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeString: string[] = ["A","2", "B"];

// Objetos
let pessoa: {
  nome: string;
  idade: number;
  adulto?: boolean;
} = {
  nome: "Marcos",
  idade: 20
};

// Funções

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
