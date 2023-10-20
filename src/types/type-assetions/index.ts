const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null assetions (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'blue';

// type assertions
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'blue';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'value';
input.focus();

// type assertions
// const body4 = document.querySelector('body') as Number; // Type 'HTMLBodyElement' is missing the following properties from type 'Number'
// body4.style.background = 'blue';
