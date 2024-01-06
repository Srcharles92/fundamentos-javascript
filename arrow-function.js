//ela não precisa de return a menos que tenha mais de uma linha 
// você só vai precisar usar chaves se a função tiver mais que uma linha 
// não pode ser nomeada
// ela sempre vem com const e o nome da variavel 

// Exemplo 1 de Aroow Function

const apresentarArrow = nome => `meu nome é ${nome}`;


// Exemplo 2
const soma = (num1, num2) => num1 + num2;

console.log(soma(4,5));

// exemplo 3 com mais de uma linha 
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente numeros de 1 a 9"
    } else{
        return num1 + num2 
    }
}

// HOSTING: Arrow Function se comporta da mesma forma que a Expressão 