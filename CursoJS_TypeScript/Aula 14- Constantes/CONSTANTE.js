//nao podemos criar constante com palavras reservadas
// constantes precisam ter nomes significativo
// nao pode começar o nome de uma constante com um numero
// nao podemos ter espaços ou traços
// utilizamos camelCase
//Case-sensitive
//nao podemos modificar o valor de uma constante
// nao utilize var, utilize CONST

const nome = 'joao';
console.log(nome);

//const nome; //nao pode fazer assim, pq ela nao esta inicializada
//const local = 'acima';
//local = 'abaixo'; nao podemos modificar a const

const primeiroNumero = 5; //Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
// + - * / 
console.log(resultado);

const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
//console.log(resultadoDuplicado);
//console.log(resultadoTriplicado);
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

// DENTRO DE ASPAS ' ' É STRING= TEXTO
// FORA DE ASPAS É NUMERO  NUMBER


//para descobrir qual tipo a variavel é
console.log( typeof (primeiroNumero));
console.log ( typeof primeiroNumero);
