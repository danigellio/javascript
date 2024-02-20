//IEEE 754-2008

let num1 = 10.5748468;
let num2 = 2.5;
let num3 = 0.1;
let num4 = 0.9;
//SOMA COM NUMEROS FLOAT
/*num3 += num4;   soma corretamente os numeros float
num3 = parseFloat(num3.toFixed(2)); devemos por isso para a soma ser corretamente
console.log(num3);*/
//OUTRO MODO DE SOMA OM NUMEROS FLOAT
 let num5 = 0.7;
 let num6 = 0.1;
 num5 = ((num5 * 100) + (num6 * 100)) /100; 
console.log(num5);  // da o resultado correto 0.8




//console.log(num1.toString() + num2); //faço o numero ser uma string fica como resultado 12.5 ele nao soma ele contatena 1+2.5
//num1 = num1.toString();  //aqui eu mudo a variavel pra string permanentemente




//console.log(num1.toString(2)); // representaçao binaria

//console.log(num1.toFixed(2)); // mostra 2 casa decimais ex era 10.48897 ficou  10.48  ... pode ser (3).. (4)..etc.

//console.log(Number.isInteger(num1)); //retorna verdadeiro ou falso, se o numero é inteiro ou nao

/*let temp = num1 * 'ola';
console.log(temp); retorna NaN*/

/*let temp = num1 * 'ola';
console.log(Number.isNaN(temp)); ele mostra true ou false se e number ou nao*/
