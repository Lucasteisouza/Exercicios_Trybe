// let n = 6;

// for(j = 1; j < n; j += 1){
//     let linhaDeAsteriscos = "";
//     for (i = 1; i < n ; i += 1) {
//         linhaDeAsteriscos = linhaDeAsteriscos + "*";
//     }
//     console.log(linhaDeAsteriscos);
// }


// let n = 6;
// let linhaDeAsteriscos = "";
// for (i = 1; i < n ; i += 1) {
//     linhaDeAsteriscos = linhaDeAsteriscos + "*";
//     console.log(linhaDeAsteriscos);
// }

// let n = 6;
// let arrayDeAsteriscos = []
// for(index = 0; index < n; index += 1){
//     arrayDeAsteriscos.push(' ')
// }
// for (index  = 0; index < n; index +=1){
//     arrayDeAsteriscos.shift();
//     arrayDeAsteriscos.push('*')
//     let linhaDeAsteriscos= '';
//     for (index2 = 0; index2 < n; index2 += 1){
//         linhaDeAsteriscos = linhaDeAsteriscos + arrayDeAsteriscos[index2]
//     }
//     console.log(linhaDeAsteriscos)
    
// }

// let n = 7;
// let arrayDeAsteriscos = []
// for(index = 0; index < n; index += 1){
//     arrayDeAsteriscos.push(' ')
// }
// for (index  = 0; index < n; index +=1){
//     arrayDeAsteriscos.shift();
//     arrayDeAsteriscos.unshift('*');
//     arrayDeAsteriscos.pop();
//     arrayDeAsteriscos.push('*');
//     console.log(arrayDeAsteriscos)
// }


    // let linhaDeAsteriscos= '';
    // for (index2 = 0; index2 < n; index2 += 1){
    //     linhaDeAsteriscos = linhaDeAsteriscos + arrayDeAsteriscos[index2]
    // }
    // console.log(linhaDeAsteriscos)
    
// let n = 11;
// let arrayCentral = ['*'];
// let arrayLeft =[];
// let arrayRight = [];
// console.log
// for(index =1; index< n/2; index += 1){
//     arrayLeft.unshift(' ');
//     arrayRight.push(' ')
// }
// let arrayConcat = arrayLeft.concat(arrayCentral, arrayRight);
// console.log(arrayConcat.join([separador='']))
// for (index = 1; index < n/2; index += 1){
//     arrayLeft.shift();
//     arrayLeft.push('*');
//     arrayRight.pop();
//     arrayRight.unshift('*')
//     let arrayConcat = arrayLeft.concat(arrayCentral, arrayRight);
//     console.log(arrayConcat.join([separador='']))
// }

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
