const custo = 10;
const venda = 100;
let custoAjustado = custo + custo / 5;
let lucro = venda - custoAjustado;

if (custo < 0) {
    console.log("Erro, o custo não pode ser um número negativo");
} else if (venda < 0) {
    console.log("Erro, o valor de venda não pode ser negativo");
} else {
    console.log(
        "O lucro da venda de mil unidades do produto será de R$ " + 1000 * lucro
    );
}
