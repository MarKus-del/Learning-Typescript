// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

console.log(multiplicaArgs(1, 2, 3));

export function concatenaString(...args: string[]) {
  return args.reduce((ac, valor) => ac + valor);
}

console.log(concatenaString('a', 'b', 'c'));
