let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.parentElement.style.color = 'green';

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Ipsen Lorn'

let pai = document.getElementById('pai');
pai.firstElementChild.innerText = 'Acessado';

elementoOndeVoceEsta.previousElementSibling.innerText = 'Opá!'

elementoOndeVoceEsta.children[1].innerText = 'Atenção aqui que é importante, pessoal'

elementoOndeVoceEsta.nextElementSibling.innerText = 'Deixando a marca'

pai.children[2].innerText = 'El último'