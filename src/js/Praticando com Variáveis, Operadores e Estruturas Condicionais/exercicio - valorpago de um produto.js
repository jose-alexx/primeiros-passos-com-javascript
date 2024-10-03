/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const valorProdutoPagar = 500;
let calculoPorcentagem = 0;
let calculoFinal = 0;

console.log('(1) - À vista Débito');
console.log('(2) - À vista no Dinheiro ou PIX');
console.log('(3) - Em duas vezes');
console.log('(4) - Acima de duas vezes');

const condicaoPagamento = 4;

if (condicaoPagamento === 1) {
    calculoPorcentagem = (valorProdutoPagar * 0.1);
    calculoFinal = (valorProdutoPagar - calculoPorcentagem);
    console.log('O valor do produto com 10% de desconto é: ' + calculoFinal.toFixed(2));
} else if (condicaoPagamento === 2) {
    calculoPorcentagem = (valorProdutoPagar * 0.15);
    calculoFinal = (valorProdutoPagar - calculoPorcentagem);
    console.log('O valor do produto com 15% de desconto é: ' + calculoFinal.toFixed(2));
} else if (condicaoPagamento === 3) {
    console.log('O valor do produto sem juros: ' + valorProdutoPagar.toFixed(2));
} else if (condicaoPagamento === 4) {
    calculoPorcentagem = (valorProdutoPagar * 0.1);
    calculoFinal = (valorProdutoPagar + calculoPorcentagem);
    console.log('O valor do produto com 10% de desconto é: ' + calculoFinal.toFixed(2));
}