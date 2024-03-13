//Escreva uma funçao que recebe 2 numero e retorne o maior eles
///mesma function mais melhorada

function valorMaior( x, y){
     if(x > y){
          return x;
     }else{
          return y;
     }
}

console.log(valorMaior(10,2));
//---------------------------------
function valorMaior( x, y){
     if(x > y){
          return x;
     }
          return y;
     }
//---------------------------------
     function valorMaior( x, y){
          if(x > y) return x;
          return y;
     }
//---------------------
     function valorMaior( x, y){
          return x > y ? x : y ; //x maior que y, ou retorna o x ou o y
     }

//---------------
const max2= (a,b) => {
     return a> b ? a : b;
}

//-------------
const max3 = (c, d ) =>  x > y ? x : y;
console.log(max3(10,5));