let x = 10 // eslint-disable-line
x = 0b1010;
// x = 'Lima';

const y = 20;
// let z: 50 = 50
let z = 50 as const //eslint-disable-line
// z = 18;

const person = {
  firstname: 'Guilherme' as const,
  lastname: 'Lima',
};

//person.firstname = 'Maria'; // Type '"Maria"' is not assignable to type '"Guilherme"

function choiceColor(color: 'Red' | 'Blue' | 'White'): string {
  return color;
}

console.log(choiceColor('Cyan')); // Argument of type '"Cyan"' is not assignable to parameter of type '"Red" | "Blue" | "White"'
console.log(choiceColor('Blue'));

// Module Mode
export default 1;
