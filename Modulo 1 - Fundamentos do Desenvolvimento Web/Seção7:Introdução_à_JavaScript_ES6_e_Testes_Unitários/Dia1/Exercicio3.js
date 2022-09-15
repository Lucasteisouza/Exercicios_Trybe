const factorial = numero => {
  let fatorial = numero;
  for (let index = numero - 1; index > 0; index -= 1) {
    fatorial *= index;
  }
  return fatorial;
}

console.log(`Esse é o fatorial: ${factorial(5)}`);