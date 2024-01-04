// let x = "";
// console.log(x);
// x = "oi";

// Existe 3 tipos de escrever funções 

// *1° fomar: DECLARAÇÂO DE FUNÇÂO*

// 1° momento da função, a gente declara e diz o que ela faz
// aqui eu defini que ela vai guardar uma string
function imprimaTexto(texto){
    console.log(texto)
}

//2° executa função(1 ou + vezes)
// aqui eu só passo a string que eu quero
imprimaTexto(soma());

function soma(){
    return 2+2; // aqui eu peço para retornar para fora o valor
}

//console.log(soma());// aqui eu imprino o que saiu ja chamando a função