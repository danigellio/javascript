console.log('Frederica' && true && 'Dani'); // retorna o ultimo valor 

/**
 * FALSY
 * false  -------unico literal
 * 0
 * '' ""  ``
 * null / undefined
 * NaN
 */
console.log('luiz' && ''&& 'Maria');  //string mostra vazia


function falaOi(){
     return 'Oi';
}
const vaiExecutar = false;
console.log(vaiExecutar && falaOi());   

console.log(0 || false || null || 'frederica' || true); // retorna frederiaca pq ele começa a verificar pelo 0, depois o false, e quando chega na frederica ele acha o verdade e ja finaliza.


const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao)