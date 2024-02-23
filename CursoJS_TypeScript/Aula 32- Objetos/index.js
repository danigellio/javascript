/*const pessoa1 = {
     nome:'Luiz',
     sobrenome:'Silva',
     idade: 25   
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome); */

function criaPessoa (nome,sobrenome,idade) {
     /*return {  //PODEMOS FAZER ASSIM
          nome: nome,
          sobrenome: sobrenome,
          idade: idade
     };*/
     return {nome, sobrenome, idade}; //ou assim
}

const pessoa1 = criaPessoa('Luiz', 'Silva', 25);
console.log(pessoa1.nome);
const pessoa2 = criaPessoa('Ana', 'Pereira', 35);
console.log(pessoa2.nome, pessoa2.sobrenome);
const pessoa3 = criaPessoa('Joao', 'Souza', 29);
console.log(pessoa3.nome, pessoa3.idade);



const pessoa4 = {
     nome: 'DANIELA',
     sobrenome: 'GELLIO',
     idade: '30',

     fala(){ //nao preciso escrever function
          console.log('ola mundo');
          console.log(`${this.nome} ${this.sobrenome} esta falando oi...`)
          console.log(`minha idade é ${this.idade}`);
     }, //colocar ,

     incrementaIdade(){
          ++this.idade; //ou this.idade++; para incrementar 
     }
};
pessoa4.incrementaIdade();
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
