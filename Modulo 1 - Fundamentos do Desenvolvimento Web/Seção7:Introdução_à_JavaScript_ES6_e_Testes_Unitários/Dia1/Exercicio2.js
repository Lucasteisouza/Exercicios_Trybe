const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  const sortedOddsAndEvens = oddsAndEvens.sort(function(a,b){
    return a - b;
  });
  return sortedOddsAndEvens
}
console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉
// console.log