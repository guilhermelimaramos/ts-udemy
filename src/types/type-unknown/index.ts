let x: unknown;

x = 10;
x = 'Guilherme';
x = true;
x = 20;

const y = 32;

//console.log(x + y); // x is type of 'unknown'

if (typeof x === 'number') console.log(x + y);
