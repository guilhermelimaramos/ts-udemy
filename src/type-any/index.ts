// Use "any" only in the last case
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage('Hello, world!'));
console.log(showMessage([1, 2, 3]));
console.log(showMessage(false));
