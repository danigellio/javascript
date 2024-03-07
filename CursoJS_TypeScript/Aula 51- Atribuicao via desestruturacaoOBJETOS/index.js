const pessoa = {
     nome:'DANIELA',
     sobrenome: 'GELLIO',
     idade: 30,
     endereco: {
          rua:'Av Brasil',
          numero: 2
     }
};
//Atribuicao via desestruturação
const { nome } = pessoa; 
//pode por {nome, sobrenome, idade} = pessoa;
//pode por {nome = ' ', sobrenome, idade} = pessoa; quando nao for colocado o nome ou nome = 'nao existe',
//podemos tbm mudar o nome da variavel... ex: {nome: n = ' ', sobrenome} aqui mudar a variavel NOME para N

console.log(nome);
//console.log(pessoa.nome)


const {endereco: {rua, numero} } = pessoa;
//endereço completo
//const {endereco: {rua, numero}, endereco } = pessoa;
//podemos mudar o CONTEUDO DA VARIAVEL ex: {rua: r = 12345, numero}, endereco }

//const {nome,sobrenome,... resto} = pessoa; ele mostra nome,e sobrenome e todo o resto do obejto

//podemos ter 
console.log(rua, numero);//console.log(rua, numero,endereco);
