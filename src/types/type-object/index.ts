const objectA: {
  keyA: string;
  readonly keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'value A',
  keyB: 'value B',
};

objectA.keyA = 'another value';
objectA.keyC = 'new value';
objectA.keyD = 'new key';

console.log(objectA);
