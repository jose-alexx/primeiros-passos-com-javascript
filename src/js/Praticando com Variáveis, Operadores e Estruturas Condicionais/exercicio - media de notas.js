/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3; 

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 8;

mediaDoAluno = (nota1 + nota2 + nota3) / 3;

console.log('A sua média é: ' + mediaDoAluno.toFixed(2));

if (mediaDoAluno < 5) {
    console.log("reprovação");
} else if (mediaDoAluno >= 5 && mediaDoAluno <= 7) {
    console.log("recuperação");
} else if (mediaDoAluno > 7) {
    console.log("passou de semestre");
}