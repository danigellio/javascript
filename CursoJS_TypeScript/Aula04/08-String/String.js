let umaString = "um \"texto\"";  
console.log(umaString); //fica um "texto"

console.log(umaString.charAt(5)); //mostra a quinta letra
console.log(umaString.concat(' ', 'em', ' ', ' um lindo dia')); //para contatenar 
console.log(umaString + ' em um lindo dia.');

console.log(`${umaString} em um lindo dia`); //mais usado

console.log(umaString.indexOf('texto')); //para saber em qual indice ele iniciao texto no caso posicao 3.

console.log(umaString.lastIndexOf('m',3)); //começa de traz pra frente no caso 1.

console.log(umaString.match(/[a-z]/g));//retorna todas letraas minusculas
console.log(umaString.match(/[a-z]/));

console.log(umaString.search(/x/)); //procura a letra x

console.log(umaString.replace('um', 'outro')); //substitui o 'um' para 'outro'

console.log(umaString.replace(/t/, '#')); // um T fica com #
// ou (/t/g, '#') ai fica todos o T com #

console.log(umaString.length); //mostra o tamanho da string contando com o espaço

console.log(umaString.slice(0,6)); // ele fatia a frase, começa do 0 e vai ate a letra numero 6

console.log(umaString.split('t'));//ele tira os t da frase

console.log(umaString.toUpperCase()); //fica tudo em maiusculo
console.log(umaString.toLowerCase()); //fica tudo minusculo()