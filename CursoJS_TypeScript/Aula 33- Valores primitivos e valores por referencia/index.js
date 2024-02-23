/**
 * Primitivos(IMUTÁVEIS) - string, number, boolean, undefined,null (bigint, symbol)- valores copiados
 * 
 * Referência (mutável) - array, object, function- passado por referencia
 */
//primitivos so copia
let a = 'A';
let b = a; //copiou o a
console.log(a,b);

a = 'outra coisa';
console.log(a,b); // o b nao copia o a dessa parte, pq ele copiou o de cima
//.....................................

// passado por referencia
let c =[1,2,3];
let d = [...c]; //copia o c
let e = d;
console.log(c,d);
c.push(4);
console.log(c,d,);

d.pop();
console.log(c,d);

//..............
const z = {
     nome:'dani',
     sobrenome:'gellio'
};
const y = z; // ELE MUDA PARA DANIELA, PQ PASSOU POR REFERENCIA
z.nome = 'Daniela '; 
console.log(y);


//------------------------
const j = {
     nome:'Inbra',
     sobrenome:'Scarso'
};
const i = {...j} //faço um sprat, espalho ele , criando outro espaço na memoria, o valor de i é totalmente independente, ele nao altera, se eu alterar depois.
j.nome = 'Inbrahin '; 

console.log(j);
console.log(i);