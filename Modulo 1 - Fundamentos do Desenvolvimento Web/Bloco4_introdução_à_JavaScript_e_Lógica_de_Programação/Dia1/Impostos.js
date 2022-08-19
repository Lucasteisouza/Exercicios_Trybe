const salarioBruto = 10000;
let INSS;
let IR;

if(salarioBruto<0){
    console.log('O salário precisa ter valor positivo')
}else if(salarioBruto<=1556.94){
    INSS = salarioBruto*8/100;
}else if(salarioBruto<=2594.92){
    INSS = salarioBruto*9/100;
}else if(salarioBruto<=5189.82){
    INSS = salarioBruto*11/100;
}else if(salarioBruto>5187.82){
    INSS = 570.88;
}

let salarioBase= salarioBruto-INSS;

if (salarioBase<=1903.98){
    IR=0
}else if (salarioBase <= 2826.66){
    IR = (salarioBase * 7.5 / 100) - 142.8;
}else if (salarioBase <= 3751.8){
    IR = (salarioBase*15/100) - 354.8;
}else if (salarioBase <= 4664.68){
    IR = (salarioBase*22.5/100) - 636.13;
}else{
    IR = (salarioBase*27.5/100) -896.36;
}

let salarioLiquido = salarioBase-IR;
console.log(salarioLiquido) 