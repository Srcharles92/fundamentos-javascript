// Boolean

// const usuarioLogado = true;
// const contaPaga = false;

// Truthy ou falsy

// 0 => false , 0 é um dos valores que o JS considera como false
// 1 => true

// console.log(0 == false);
// console.log("" == false);
// o JS considera esses dois  valores como false

// console.log(1 == true);
// o JS considera esse valor como verdadeiro

// NULL ==> vazio ou nada
let minhaVar;
let varNull = null;


let numero = 3;
let texto = "Alura";

console.log(typeof minhaVar);
console.log(typeof varNull);

// Notas: Null foi criado como objeto, ele deveria ser criado como Null
// e esse é um dos bugs no JS que acaba ocorrendo e que eles não pretendem consertar, pois, caso isso ocorrar,
// vai acabar quebrando muitos códigos já existentes
