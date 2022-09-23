const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answerComparer = (teste, gabarito) => {
  let pontos = 0;
  for (let index = 0; index < teste.length; index += 1) {
    if (teste[index] === gabarito[index]) {
      pontos += 1;
    } else if (teste[index] === 'N.A') {
      
    } else{
      pontos -= 0.5;
    }
  }
  return pontos;
}

console.log (answerComparer(STUDENT_ANSWERS, RIGHT_ANSWERS))