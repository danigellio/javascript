/**Escreva uma funçao que recebe um numero e retorne o seguinte:
 * numero é divisivel por3 = fizz
 * numero é divisivel por5 = buzz
 * numero é divisivel por3 e 5 = fizzbuzz
 * numero nao é divisivel por 3 e 5 = retorna o proprio numero
 * checar se o numero é realmente um numero= retorna o proprio numero
 * use a funcao com numero de 0 a 100
 */
function fizzBuzz(numero){
     if (typeof numero !== 'number') return numero;
     if( numero % 3 ===0 && numero % 5 === 0) return 'FizzBuzz';
     if (numero % 3 ===0) return 'Fizz';
     if(numero % 5 ===0) return 'Buzz';
     return numero;
}
console.log('a', fizzBuzz('a'))
for(let i = 0; i<= 100; i++){
     console.log(i, fizzBuzz(i))
}