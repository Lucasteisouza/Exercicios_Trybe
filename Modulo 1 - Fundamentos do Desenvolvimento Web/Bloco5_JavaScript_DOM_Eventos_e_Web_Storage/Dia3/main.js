const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let listas = document.querySelectorAll('li');
let lista1 = document.querySelectorAll('li')[0]
let lista2 = document.querySelectorAll('li')[1]
let lista3 = document.querySelectorAll('li')[2]

lista1.addEventListener('click', techAdder);
lista2.addEventListener('click', techAdder);
lista3.addEventListener('click', techAdder);

function techAdder(evento){
  let theTarget = evento.target;
  for (let index in listas){
    if(listas[index].className==='tech'){
    listas[index].classList.remove('tech')
    }
    if(theTarget===listas[index]){
    listas[index].classList.add('tech');
    }
  }
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

let inputer = document.getElementsByTagName('input');

let tech = document.getElementsByClassName('tech');

inputer[0].addEventListener('change', changer);

function changer(){
  tech[0].innerText = inputer[0].value
}
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
const spotrybefy = document.getElementById('my-spotrybefy');

spotrybefy.addEventListener('dblclick', reDirecter);

function reDirecter(){
  window.location.href = 'https://app.betrybe.com/course';

}
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

spotrybefy.addEventListener ('mouseover', colorChanger)

function colorChanger(event){
  event.target.style.backgroundColor= 'red'

}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'