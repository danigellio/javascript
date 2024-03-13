


/*
try{
     console.log(num);
}catch(e){// ou err, error, e 
console.log('num nao existe');
console.log(e);
}  
*/
function soma (x, y){ //typeof = tipo
     if(typeof x !== 'number' || typeof y !== 'number'){
          throw new Error ('x e y precisam ser numeros.');
          //ou ReferenceError ou TypeError ou somente Error
     }
     return x+ y;
}

try{
console.log(soma(1, '3'));
console.log(soma(1, 2));
}catch(error){
     console.log(error);// ou console.log('alguma coisa ');
}