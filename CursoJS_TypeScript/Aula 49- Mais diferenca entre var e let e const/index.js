const verdadeira =true;

//let tem escola bloco {...bloco}
//var so tem escopo de funcao
let nome = 'luiz';//criando
var nome2='liz'; //criando

console.log(nome);
if(verdadeira){
     let nome = 'Ana';//criando
     var nome2='flor';//redeclarando

     console.log(nome);
}

if(verdadeira){
     let nome='outra coisa..';
     var nome2='legal';//redeclarando

     console.log(nome);
}


console.log(nome2,nome);