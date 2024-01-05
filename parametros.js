// Argumentos/Parametros de função (1, 2)

              //1       //2
function soma(numero1, numero2){
    return numero1 + numero2;
}

//console.log(soma(30,4));

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(36,"juliana"));


// criei um função e nos parametros e defini como valor padrão 1 e caso alguém chame essa função
// e passe apenas um parametro, ela vai multiplicar pelo numero 1
function multiplica (num1 = 1, num2 = 1){
    return num1 * num2;
}

                          //9         //6
console.log(multiplica(soma(4,5), soma(3,3)));


// podemos ter várias funções com nomes de parametros iguais 

