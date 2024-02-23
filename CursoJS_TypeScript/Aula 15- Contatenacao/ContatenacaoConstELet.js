const nome =  'Daniela ';
const sobrenome = 'Scarso';
const idade= 30;
const peso = 68;
const altura = 1.68;

let imc;
let anoNascimento;
imc = peso / (altura * altura);
anoNascimento = 2024 - anoNascimento;


console.log (nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'de altura e seu IMC é de ', imc);
console.log(nome, 'nasceu em ', anoNascimento, '.');



console.log (nome + ' ' + sobrenome, 'tem' + idade + 'anos, pesa' + peso + 'kg');
console.log(`tem ${altura} de altura e seu IMC é de  ${imc}`);
console.log(`nome ${nasceu} em ${anoNascimento}.`);

