type HasName = { name: string };
type HasLastname = { lastname: string };
type HasAge = { age: number };

type People = HasName & HasLastname & HasAge;

// type AB = 'A' | 'B';
// type AC = 'A' | 'C';
// type AD = 'A' | 'D';
// type Intersection = AB & AC & AD; //'A'

const people: People = {
  name: 'Guilherme',
  age: 20,
  lastname: 'Lima',
};

console.log(people);
console.log('=========================');

export default 1;
