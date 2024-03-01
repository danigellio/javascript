const hora = 25;

if (hora >= 0 && hora <= 11){
     console.log('Bom dia');
}else if  (hora >= 12 && hora <= 17){
     console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23){
     console.log('Boa noite');
}else {
     console.log('Ola');
}
// if pode ser usado usado sozinho
// sempre que utilizo a palavra else, preciso de um if antes
// eu posso ter varios else ifs na condição
//Podemos usar condições sem else if, apensa utilizando if e else

const tenhoDinheiro = true;
 if(tenhoDinheiro){
     console.log('Vou sair de casa');
 }else{
     console.log('Não vou sair de casa');
 }