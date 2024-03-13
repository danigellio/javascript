function pareImpar(x, y) {
     const soma = x + y;
     if (soma % 2 === 0) {
          return 'par';
     } else {
          return 'impar';
     }
}
console.log(pareImpar(3, 2));

//-------------------
function numero(x) {
     if (x % 2 === 0) {
          return 'par';
     } else {
          return 'impar'
     }
}
console.log(numero(4));