/**
 * Operadores Lógicos
 * && -> AND -> E   
 * || -> OR -> OU
 * ! -> NOT -> NÃO
 */

const expressao = true && true && true;
console.log(expressao);

const expressao1 = true || true || false;
console.log(expressao1);

const usuario = 'Luiz';
const vaiLogar = usuario === 'Luiz';
console.log('vaiLogar');

console.log(!false);
console.log(!!false); // ele volta para o valor original