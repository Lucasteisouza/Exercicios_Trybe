const maiorPalavra = string => {
  const arrOfWords = string.split(' ');
  let longest = '';

  for (let index in arrOfWords) {
    if (longest.length < arrOfWords[index].length) {
      longest = arrOfWords[index]
    }
  }
  return longest;
}
console.log(maiorPalavra('minha meia tem um furo'));