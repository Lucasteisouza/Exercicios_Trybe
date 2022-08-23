// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

// let soma = 0;
// for (let numero = 1; numero <= 50; numero += 1){
// soma = soma + numero;
// }
// console.log('A soma total de 1 a 50 é: ' + soma)

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let divisiveisPorTres = 0;
// for (index = 2; index <= 150; index += 1){
//     if(index % 3 === 0){
//         divisiveisPorTres +=1;
//     }
// }
// console.log ('Entre 2 e 150 existem ' + divisiveisPorTres + ' números divisiveis por 3')
// if (divisiveisPorTres===50){
//     console.log ('Lucas, Guilherme, Lucas, Larissa, Zaqueu são os futuros melhores programadores')
// }


// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

// let Player1 = "Pedra";
// let Player2 = 'Tesoura';

// if (Player1==='Papel' && Player2==='Pedra'){
//     console.log('Player 1 won')
// }else if (Player1=== Player2){
//     console.log('A ties');
// }else if (Player1==='Papel' && Player2==='Tesoura'){
//     console.log('Player 2 won')
// }else if (Player1 === 'Pedra' && Player2 ==='Papel'){

// }

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

// let idade =16;
// if(idade>=18){
//     console.log('A pessoa é maior de idade')
// }else{
//     console.log('A pessoal não é maior de idade')
// }
// Usando ternario:
let idade =16;
idade>=18 ? console.log('A pessoa é maior de idade') : console.log('A pessoal não é maior de idade')
// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

// let idadeCarol = 15;
// let idadeMurilo = 22;
// let idadeBaeta = 36;
// if (idade)