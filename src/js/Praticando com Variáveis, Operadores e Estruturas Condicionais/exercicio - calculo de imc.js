/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

const pesoPessoa = 65;
const alturaPessua = 1.70; 

const imcPessoa = pesoPessoa / (Math.pow(alturaPessua, 2));


if (imcPessoa < 18.5) {
    console.log('Abaixo do peso');
} else if (imcPessoa >= 18.5 && imcPessoa < 25) {
    console.log('Peso normal');
} else if (imcPessoa >= 25 && imcPessoa < 30) {
    console.log('Acima do peso');
} else if (imcPessoa >= 30 && imcPessoa < 40) {
    console.log('Obeso');
} else {
    console.log('Obsesidade Grave');
}