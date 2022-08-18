const peca = 'RaiNha';
let pecaAjustada = peca.toLocaleLowerCase()
switch(pecaAjustada){
    case 'peao':
        console.log('1 à frente');
        break;
    case 'torre':
        console.log('ilimitadas à frente')
        break;
    case 'bispo':
        console.log ('ilimitadas diagonasl');
        break;
    case 'cavalo':
        console.log ('locomove em L');
        break;
    case 'rainha':
        console.log('frente ou diagonais ilimitadas');
        break;
    case 'rei':
        console.log('uma casa à qualquer direção');   
        break;
    default:
        console.log('peça inválida');
    
}