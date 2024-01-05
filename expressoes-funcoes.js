// Formas de escrever funções

// 1° Declaração de Função
function funcao1(){
//bloco de código
}

// e chamamos quando formos usar ela
//funcao1();


// 2° Expressão de Função
// ela não tem nome(são anonimas), usamos uma variavel(const) para guardar essa função

const soma = function(num1, num2){return num1 + num2};
//console.log(soma(5, 5));

// Qual a dierença entre ambas ??

console.log(exemplo1())

function exemplo1(){
    return "Olá";
}
// no exemplo1 eu consigo chamar minha variavel antes da incialização dela.
// o JS passa pelo código e puxar todas essas declarações pro topo do nosso código 
// então, primeiro ele incia todas delcarações e todas nossas VAR e depois vai executar nosso códgio 
// o nome desse comportamento é " HOISTING ".

console.log(exemplo2("Olá"))

const exemplo2 = function(texto){return texto};
// no exemplo2 a função se conporta igual a uma variavel, sendo assim, 
// ela não consegue ser chamada antes de ser inciada