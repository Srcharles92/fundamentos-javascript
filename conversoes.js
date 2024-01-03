// A importância para nós saber qual é o TIPO DE DADO
// E como que a gente trabalha isso junto com os BOOLEANOS para evitar conversão 

// * Conversão implícita -> permite que a gente converta um tipo de dado em outro (um número em uma strings)
 let numero = 456;
 let numeroString = "456";

// console.log(numero == numeroString); // Aqui ele está comparadando digamos que apenas os valores

// console.log(numero + numeroString); //  Aqui rolou uma concatenação 

// * Conversão explícita

console.log(numero + Number(numeroString)); // aqui o JS vai converter a variável de valor String em Number
// podemos passar o Number no console ou diretamente na variável ex:  const numeroString = Number("456");
// Certifique-se que tenha apenas número para não retornar NaN.



// *Dica de boas práticas: Apesar do JavaScript fazer a maioria das conversões de forma correta,
//  problemas podem aparecer, então é sempre bom fazer as conversões de forma explícita.
//  Não é comum usar o operador de soma para fazer a conversão para números, mas este uso é possível.
//  Conversões de booleanos não costumam ser muito usados, mas são possíveis.





