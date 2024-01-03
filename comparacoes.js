// == (comparação implícita) só compara o valor

const numero = 5;
const texto = "5";

console.log(numero == texto);
// Aqui o JS faz a converssão do texto para número, e depois faz a comparação 


// === (comparação explícita) Compara valor e tipo de dado
console.log(numero === texto);
// Aqui o JS não faz a conversão, ele compara os valores e os tipos das variáveis
// e acaba resultando em false. 
// nesse caso temos que fazer a converssão manualmente(colocando Number() ou string())

// TYPEOF mostra qual é o tipo de dado guardado na variável.

console.log(typeof numero);
console.log(typeof texto);


// conversão explícita
Number()
String()