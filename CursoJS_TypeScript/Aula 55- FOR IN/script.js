const frutas = ['pera','maça','uva'];
// FOR IN -> LÊ OS INDICES OU CHAVES DO OBJETOS 
for( let i in frutas){
     //console.log(i);
     console.log(frutas[i]);// i é o indice
}

//EXEMPLOS----------
/*for(let i = 0; i < frutas.length; i++){
console.log(frutas[i]);

}*/
//for in retorna o indice
//EXEMPLO--------
const pessoa ={
     nome:'dani',
     sobrenome:'gellio',
     idade:30
};
for(let i in pessoa){
     console.log(i)
     console.log(i,pessoa[i]);

}
//formas de acessar
console.log(pessoa.nome);
console.log(pessoa['nome']);
