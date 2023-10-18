/*eslint-disable*/
//Tipos primitivos
let nome: string = 'Guilherme';
let age: number = 20;
let adult: boolean = true
let symbol: symbol = Symbol('any-symbol')
// let bigInt: bigint = 10n

// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];

let arrayOfString: Array<string> = ['Guilherme', 'Mavi'];
let arrayOfString2: string[] = ['Guilherme', 'Mavi'];


// Object
let people: {name: string, age: number, adult?: boolean} = {
  name: 'Guilherme',
  age: 20,
  adult: true
}


// Function
function sum(x: number, y: number): number {
  return x + y;
};

const result = sum(12, 8)

const sum2: (x: number, y: number) => number = (x, y) => x + y


