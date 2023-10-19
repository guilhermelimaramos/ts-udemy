type Age = number;

type Person = {
  name: string;
  age: Age;
  salary: number;
  favColor?: FavColor;
};

type ColorRGB = 'Red' | 'Green' | 'Blue';

type ColorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';

type FavColor = ColorRGB | ColorCMYK;

const person: Person = {
  name: 'Guilherme',
  age: 20,
  salary: 10_000,
};

export function setFavColor(person: Person, color: FavColor): Person {
  return { ...person, favColor: color };
}

console.log(setFavColor(person, 'Blue'));
console.log(person);
