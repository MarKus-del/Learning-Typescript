type MapStringCallback = (item: string) => string;

function mapStrings(array: string[], callbackfn: MapStringCallback): string[] {
  const newArray: string[] = [];

  for (let index = 0; index < array.length; index++) {
    newArray.push(callbackfn(array[index]));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcMapped);
