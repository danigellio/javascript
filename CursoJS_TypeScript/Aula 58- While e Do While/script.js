//WHILE CHECA A CONDIÇAO E DEPOIS EXECUTA
//DO WHITE EXECUTA E DEPOIS CHECA A CONDIÇÃO


let i = 0;
while (i <= 10){
     console.log(i);
     i++;
}
console.log('######');
const nome = 'dani';
let j = 0;
while (j < nome.length){
     console.log(nome[j]);
     j++;
}

console.log('######');

function random(min, max){
     const r = Math.random() * (max - min) + min;
     return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);

while(rand !== 10){
     rand = random(min,max);
     console.log(rand);
}

//do while
console.log('######');
 
do{
     rand= random(min, max);
     console.log(rand);

}while(rand !== 10);