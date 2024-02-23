const nome = 'Luiz';
console.log(nome[1]);

const alunos = ['Ana','Joao','Pedro']; //posso por numero,true , null
console.log(alunos);
console.log(alunos [2]);
alunos[0]= 'Eduardo'; //altera o indice 0
console.log(alunos);
alunos[3] = 'Luiza'; //aumenta
console.log(alunos);

console.log(alunos.length); //PARA SABER O TAMANHO DO ARRAY

//VAI ADICIONAR ELEMENTOS
alunos[alunos.length]= 'Maria';
alunos[alunos.length]= 'Mario';
console.log(alunos);

//ADICIONA NO FINAL  *MELHOR OPÇAO E MAIS USADOS
alunos.push('Fabio');
alunos.push('Daniel');
console.log(alunos);

//AICIONA NO COMEÇO
alunos.unshift('Rafael');
console.log(alunos);

//PARA REMOVER DO FIM
alunos.pop(); 
console.log(alunos);

const removido = alunos.pop();  //para mostrar o removido
console.log(removido);
console.log(alunos);

//PARA REMOVER DO COMEÇO
alunos.shift();
console.log(alunos);

//DELETOU O 1, E O 1 FICOU VAZIO
delete alunos[1];
console.log(alunos);

//ACESSANDO OQ NAO EXISTE
console.log(alunos[50]); //UNDEFINED

console.log(alunos.slice(0,2)); //para fatiar o array
//(0, -1) ele nao mostra o ultimo

//OBJECT
console.log(typeof alunos);

console.log( alunos instanceof Array); // ele mostra se é true ou false, se é array ou nao