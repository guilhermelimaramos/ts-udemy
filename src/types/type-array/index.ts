// 2 ways -> Array<T> (generic) or T[]
function mult(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}
function concatStr(...args: string[]): string {
  return args.reduce((acc, value) => acc + value);
}
function UpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = mult(1, 2, 2);
const concatenation = concatStr('Guilherme ', 'e ', 'Mavi');
const upper = UpperCase('warning!');

console.log(result);
console.log(concatenation);
console.log(upper);

export { result };
