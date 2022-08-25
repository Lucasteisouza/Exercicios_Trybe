// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.


// function isPalindrome(string){
//     for (index in string){
//         if (string[index] != string[(string.length-1) -index]){
//             return false
//         }return true
//     }    
// }

// console.log(isPalindrome('arara'))

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function biggestInArray(numeros){
//     let biggest = 0;
//     for (index in numeros){
//         if (numeros[index]>biggest){
//             biggest = numeros[index];
//         }
//     }
//     return numeros.indexOf(biggest);
// }

// console.log (biggestInArray([2, 3, 6, 7, 10, 1]))

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function lowestInArray(numeros){
//     let indexOfLowest = 0;
//     for (index in numeros){
//         if (numeros[indexOfLowest] > numeros[index]){
//             indexOfLowest = index;
//         }
//     }
//     return indexOfLowest
// }

// console.log(lowestInArray([2, 4, 6, 7, 10, 0, -3]))

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// function biggestName(names){
//     let biggest = ' '
//     for(index in names){
//         if(names[index].length > biggest.length){
//             biggest = names[index];
//         }
//     }
//     return biggest
// }
// console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// function highestRepetition(numbers){
//     let highestCounted = 0;
//     let highestCountedNumber = 0
//     for(index in numbers){
//         let counter = 0;
//         for (index2=0; index2<numbers.length; index2 += 1){
            
//             if(numbers[index]===numbers[index2]){
//                 counter += 1
//             }
//             if (counter> highestCounted){
//                 highestCounted = counter
//                 highestCountedNumber = numbers[index]
//             }
//         }        
//     }   
//     return highestCountedNumber
// }


// console.log(highestRepetition([2, 3, 2, 5, 8, 2, 3]))

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// function sumOfPrevious(numero){
//     soma = 0;
//     for (let index=1; index<= numero; index += 1){
//         soma= soma+index
//     }
//     return soma
// }

// console.log(sumOfPrevious(10))

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function isAlliteration(word, ending){

    for (let index = (word.length - ending.length) ; index < word.length ; index += 1){
       if (word[index] !== ending[ending.length-word.length+ index]){
        return false
       }
    }
    return true
}

console.log (isAlliteration('trybe', 'be'))