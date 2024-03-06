// ? :
//CONDICAO ? VALOR VERDADEIRO : VALOR FALSO
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuário normal';
console.log(nivelUsuario);


const corUsuario = 'pink';
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);


//---------mesma coisa do cont nivelUsuario
//if (pontuacaoUsuaria >= 1000){
 //    console.log('Usuario VIP');
//}else {
//     console.log('Usuário normal');
//}