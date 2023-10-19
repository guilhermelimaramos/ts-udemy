function addOrConcat(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number') return x + y;
  return `${x}${y}`;
}

console.log(addOrConcat(23, 47));
console.log(addOrConcat('20', 23));
