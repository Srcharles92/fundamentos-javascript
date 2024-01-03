// * SintaxError(erro de Sintaxe): *

// 1° Exemplo
// const numero;
// Missing initializer in const declaration 
// Inicializador ausente na delcaração const
// ou seja, está faltando um numero para gente declarar essa const

// 2° exemplo
// console.log(numero
// missing ) after argument list
// faltando) após a lista de argumentos

// * ReferenceError: *

// 1° Exemplo
console.log(minhaVar);
// minhaVar is not defined
// minhaVar não está definida, ou seja, a gente não criou ainda essa variável.

// Resto de texto do erro (parte cinza escuro)
// ele mostra em qual arquivo está dando esse problema, e em que parte desse arquivo
// mostra o caminho do arquivo, mostra a linha e até o caractere
// é chamado de  de straktrace a lista que é passada no terminal de erro
// ela mostra todo o caminho que o JS executou e todos os aqruivos internos da ferramenta(biblioteca e etc)
