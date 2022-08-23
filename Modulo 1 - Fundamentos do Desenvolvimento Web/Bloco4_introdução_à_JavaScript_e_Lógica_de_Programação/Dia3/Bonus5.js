let n = 11;
let arrayCentral = [' *'];
let arrayLeft =[];
let arrayRight = [];
for(index =1; index< n/2; index += 1){
    arrayLeft.unshift(' ');
    arrayRight.push(' ')
}
let arrayConcat = arrayLeft.concat(arrayCentral, arrayRight);
console.log(arrayConcat.join([separador='']));
arrayRight.unshift('*');
arrayLeft.push('*');
arrayCentral= [' '];
arrayConcat = arrayLeft.concat(arrayCentral, arrayRight);
console.log(arrayConcat.join([separador='']))
for(index = 0;index < n / 2; index += 1){
    arrayLeft.shift();
    arrayLeft.push(' ');
    arrayRight.pop();
    arrayRight.unshift(' ');
    arrayConcat = arrayLeft.concat(arrayCentral, arrayRight);
    console.log(arrayConcat.join([separador='']))
}
let lastLine ='';
for (index=1; index <= n; index += 1){
    lastLine= lastLine + '*';
}
console.log(' ' +lastLine)