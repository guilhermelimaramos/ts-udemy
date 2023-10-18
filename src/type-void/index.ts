function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const people = {
  name: 'Maria',
  lastname: 'Lazarini',

  showName(): void {
    console.log(this.name, this.lastname);
  },
};

noReturn('Guilherme', 'Lima', 'e', 'Mavi', 'Linda');
people.showName();

export { people };
