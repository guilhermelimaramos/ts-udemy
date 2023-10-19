export function createPerson(
  firstname: string,
  lastname?: string,
): {
  firstname: string;
  lastname?: string;
} {
  return {
    firstname,
    lastname,
  };
}

export function squareOf(x: any): number | null {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Invalid account');
} else {
  console.log(squareOfTwoNumber);
}

if (squareOfTwoString === null) {
  console.log('Invalid account');
} else {
  console.log(squareOfTwoString);
}
