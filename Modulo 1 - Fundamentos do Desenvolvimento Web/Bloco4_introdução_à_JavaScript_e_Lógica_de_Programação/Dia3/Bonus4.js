let n = 11;
let arrayCentral = ['*'];
let arrayLeft =[];
let arrayRight = [];
console.log
for(index =1; index< n/2; index += 1){
    arrayLeft.unshift(' ');
    arrayRight.push(' ')
}
let arrayConcat = arrayLeft.concat(arrayCentral, arrayRight);
console.log(arrayConcat.join([separador='']))
for (index = 1; index < n/2; index += 1){
    arrayLeft.shift();
    arrayLeft.push('*');
    arrayRight.pop();
    arrayRight.unshift('*')
    let arrayConcat = arrayLeft.concat(arrayCentral, arrayRight);
    console.log(arrayConcat.join([separador='']))
}