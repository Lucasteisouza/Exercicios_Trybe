let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.parentElement.style.color = 'green';

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Ipsen Loren';

let pai = document.getElementById('pai');
pai.firstElementChild.innerText = 'Acessado';

elementoOndeVoceEsta.previousElementSibling.innerText = 'Opá!';

elementoOndeVoceEsta.children[1].innerText = 'Atenção aqui que é importante, pessoal';

elementoOndeVoceEsta.nextElementSibling.innerText = 'Deixando a marca';

pai.children[2].innerText = 'El último';

// Crie um irmão para elementoOndeVoceEsta.
let newSibling =  document.createElement('section');
pai.appendChild(newSibling);
newSibling.innerText= 'Irmaozão!'

// Crie um filho para elementoOndeVoceEsta.
let babyElement = document.createElement('p');
elementoOndeVoceEsta.appendChild(babyElement);
babyElement.innerText = 'Papai!!!'
// Crie um filho para primeiroFilhoDoFilho.
let primeiroFilhoDoFilhoDoFilho = document.createElement('p');
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoDoFilho);
primeiroFilhoDoFilhoDoFilho.innerText = 'Bisa?!(perdi as contas)'

// A partir desse filho criado, acesse terceiroFilho.
primeiroFilhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling.innerText = 'Não vou nem tentar'