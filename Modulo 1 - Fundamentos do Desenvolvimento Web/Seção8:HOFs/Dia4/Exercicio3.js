const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA() {
  const loweredCase = names.map((element) => element.toLowerCase());
  const concated = loweredCase.reduce((acc, curr) => acc + curr)
  return concated.split('a').length - 1
}

console.log(containsA())