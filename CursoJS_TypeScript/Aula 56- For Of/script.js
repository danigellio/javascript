   
   //for of retorna so o valor
   //0123
   //FOR CLASSICO-GERALMENTE COM ITERAVEIS (ARRAY OU STRING)
   //FOR IN- RETORNA O INDICE OU CHAVE(STRING,ARRAY OU OBJETOS)
   //FOR OF- RETORNA O VALOR EM SI(ITERAVEIS,ARRAYS OU STRINGS)
const nome = ['dani','ana','marcia'];

for(let i =0; i < nome.length; i++){
     console.log(nome[i]);
}
console.log('######');
for( let i in nome){
     console.log(nome[i]);
}
console.log('######');
for(let valor of nome){
     console.log(valor);
}
console.log('######');
nome.forEach(function(el){
     console.log(el);
});



console.log('######');
nome.forEach(function(valor,indice, array){
     console.log(valor, indice, array);
});

//COM OBJETOS
const pessoa = {
     nome:'frederica',
     idade: 3
};
for (let chave in pessoa){
     console.log(chave, pessoa[chave]);
}