const data =  new Date();
console.log(data.toString()); 

const dataN = new Date(2024, 3, 5, 20,55,500);//ano,mes dia,hora,minuto,milesimo de segundos
console.log(dataN.toString());

const dataD = new Date('2024-03-06 00:01:59');
console.log(dataD.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //mes começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); //0 domingo . 6 sabado
console.log('Dia', data.getDate());


console.log(Date.now()); //do marco zero ate hoje em milesimo de segundo,   
const dataS =  new Date(1709683680892);//aqui mostra o dia de hoje
console.log(dataS.toString()); 


function formataData(data){
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return `${dia}/${mes}/${ano}  ${hora}: ${min}: ${seg}`;

}

const dataF = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);


const dataG = new Date();
formataData(dataG);



function zeroEsquerda (num){
     return num >= 10 ? num : `0${num}`;
} //aqui vc muda a function FORMATADATA , EM VEZ DE DATA.GETDATE, COLOCA ZEROESQUERDA.(DATA.GETDATE());
//E FICA COM O ZERO NA ESQUERDA DOS NUMEROS EX 07/10/2021 10:04:01