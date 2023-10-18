const dataClient1: [number, string] = [1, 'Guilherme'];
const dataClient2: readonly [number, string, string] = [2, 'Milles', 'Morales'];
const dataClient3: [number, string, string?] = [70, 'Vitória'];
const dataClient4: [number, string, ...string[]] = [
  20,
  'Sponge',
  'Bob',
  'Square',
  'pants',
];

dataClient1[0] = 10;
dataClient1[1] = 'Guilherme Lima';
// dataClient2.pop();

console.log(dataClient1);
console.log(dataClient2);
console.log(dataClient3);
console.log(dataClient4);
