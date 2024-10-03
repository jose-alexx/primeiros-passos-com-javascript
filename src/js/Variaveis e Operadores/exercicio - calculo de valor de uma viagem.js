/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variávei. Sendo elas:
1 - Preço do combustivel;
2 - Gasto médio de combustivel do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

/**
 * Entrada
 */
const precoCombustivel = 5.79;
const KmPorLitros = 10;
const distaciaViagemEmKm = 100;

/**
 * Calculo
 */
const litrosConsumidos = (distaciaViagemEmKm / KmPorLitros) * precoCombustivel;

/**
 * Saida
 */
console.log(litrosConsumidos.toFixed(2)); /* Comverte o resultado para um texto com duas casas decimais após a virgula */