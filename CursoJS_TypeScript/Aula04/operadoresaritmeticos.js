/**
 * Aritméticos
 *   + adicao e concatenacao
 *   - / *  ** subtracao divicao multiplicacao potenciacao
 *    % resto da divição
 */

/**
 * primeiro os ()
 * depois ** 
 * depois * / %
 * depois + -
 */
const num1 =  5;
const num2 = 10;
console.log (num1 ** num2 + num1);
// podemos fazer tbm console.log((num1 + num2) * num3);


let contador = 1; //nao usar const 
contador ++; //2
contador ++; //3
++contador; //pode ser antes
console.log(contador);  //seria a variavel recebe mais 1
//temos tbm o decremento que seria  -- 

/*const passo = 2;
let contador2 = 1;
contador2 = contador2 + passo;
console.log(contador2);*/


//NaN significa NOT A NUMBER , significa erro na conta algum tipo de dado errado

let contador3= 0;
contador3 +=2;
contador3 *=3;
console.log(contador3);


const numero= 10;
const numero1 = parseInt('5'); // ele converte em numero  a string
const numero2= parseFloat('5.2'); //numero com casas decimais
const num4= Number ('8.2'); //ou ('6')
