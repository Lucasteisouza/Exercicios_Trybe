let word = 'tryber';
let invertedWord ='';
for(i = word.length - 1; i >= 0; i -= 1){
    invertedWord = invertedWord + word[i];
}
console.log(invertedWord);
