/**continue , continua para o proximo iteraçao
 * break sai do laço
 */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// CONTINUE ,SO PULA PARA  PROXIMA ITERAÇÃO, O BREAK PARA NAQUELA ITERAÇÃO
//QUANDO ELE ACHAR O NUMERO 2 ELE PULA
for (let numero of numeros ){
     if(numero === 2){
          continue;
     }
     console.log(numero);

}

//QUANDO ELE ACHAR O NUMERO 2 E 5 ELE PULA

console.log('#####');
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of data ){
     if(i === 2 || i === 5){
          console.log('pulei numero 2 e 5');
          continue;
     }
     console.log(i);

}

console.log('#################');
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let k of num ){
     if(k === 7){
          console.log('paro no 7, nao executo o 7');
          break;
     }
     console.log(k);

}