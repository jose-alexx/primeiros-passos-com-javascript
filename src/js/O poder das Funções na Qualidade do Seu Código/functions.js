/*
function sayMyName(name) {
    console.log('O seu nome é: ' + name);
}

sayMyName('Renan');
sayMyName('Robert');
 */
function calcularIMC(pesoPessoa, alturaPessoa) {
    return pesoPessoa / (Math.pow(alturaPessoa, 2));
}

function classificarIMC(imcPessoa) {
    if (imcPessoa < 18.5) {
        return 'Abaixo do peso';
    } else if (imcPessoa >= 18.5 && imcPessoa < 25) {
        return 'Peso normal';
    } else if (imcPessoa >= 25 && imcPessoa < 30) {
        return 'Acima do peso';
    } else if (imcPessoa >= 30 && imcPessoa < 40) {
        return 'Obeso';
    } else {
        return 'Obsesidade Grave';
    }
}

// Main
(function () {
    const pesoPessoa = 65;
    const alturaPessua = 1.70;

    const imcPessoa = calcularIMC(pesoPessoa, alturaPessua);

    console.log(imcPessoa.toFixed(2));
    console.log(classificarIMC(imcPessoa));
})();
