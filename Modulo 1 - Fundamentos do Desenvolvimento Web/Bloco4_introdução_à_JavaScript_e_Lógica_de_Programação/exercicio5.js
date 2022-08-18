let primeiroAngulo = 10;
let segundoAngulo = 20;
let terceiroAngulo = 40;

let somaDosAngulos = primeiroAngulo+segundoAngulo+terceiroAngulo;
console.log(somaDosAngulos)
if(primeiroAngulo>0){
    if(segundoAngulo>0){
        if(terceiroAngulo>0){
            if(somaDosAngulos === 180){
                console.log('true')
            }
            else{
                console.log('false')
            }

        }
        else{
            console.log('Angulo inválido')
        }
    }
    else{
        console.log('Angulo inválido')
    }
}
else{
    console.log('Angulo inválido')
}

