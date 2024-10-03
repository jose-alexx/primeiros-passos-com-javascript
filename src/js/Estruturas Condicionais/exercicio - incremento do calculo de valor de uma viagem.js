/**
 * Faça um program para calcular o valor de uma viagem.
 * 
 * Você terá 5 variaveis. Sendo elas:
 * 1 - Preço do etanol;
 * 2 - Preço da gasolina;
 * 3 - O tipo de combustivel que está no seu carro;
 * 4 - Gasto médio de combustivel do carro por KM;
 * 5 - Distancia em KM da viagem;
 * 
 * Imprimir no console o valor que será gasto para realizar esta viagem.
 */

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'etanol';
const kmPorLitros = 10;
const distaciaViagemEmKm = 100;

const litrosConsumidos = (distaciaViagemEmKm / kmPorLitros);

if (tipoCombustivel === 'etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else if (tipoCombustivel === 'gasolina') {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else {
    console.log('Combustivel não encontrado!');
}