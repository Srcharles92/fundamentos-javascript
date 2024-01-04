// ele é basicamente um IF, ele faz uma comparação, só que ele, tem uma maneira especial de ser escrita.
// ele faz a comparação em uma única linha 

const idadeMinima = 18;
const idadeCliente = 19;

// Exemplo com IF
/*
if (idadeCliente >= idadeMinima) {
    console.log("cerveja")
} else{
    console.log("suco")
}
*/

//Exemplo com Operador ternário
             //condição                    //true     /false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");
// ? separa a condição dos resultados
