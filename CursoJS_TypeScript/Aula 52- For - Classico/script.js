// i -significa index
for (let i = 0;i <= 5; i++){

     console.log(i);

}


for (let y =400; y  <= 500; y+=10){
     console.log(y);
}


for (let j = 500; j  >= 400; j -=10){
     console.log(j);
}
for( let d= 0; d <=10; d++){
     const par = d % 2 === 0 ? 'par' : 'impar';
     console.log(d,par);
}

const frutas = ['maça', 'pera', 'uva'];

for (let g = 0; g < frutas.length; g++){
     console.log(`Indice ${g}`,frutas[g]);
}


//console.log(frutas.length)para saber o tamanho do array;
