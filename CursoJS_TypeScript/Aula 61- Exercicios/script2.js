//ESCREVA UMA FUNÇÃO CHAMADA EPAISAGEM QUE RECEBE DOIS ARGUMENTOS , LARGURA E ALTURA DE UMA IMAGEM (NUMBER). RETORNE TRUE SE A IMAGEM ESTIVER NO MODO PAISAGEM
function ePaisagem (l , a){
 return l > a ? true : false;
}
console.log(ePaisagem(12,1080));

//************PODERIAMOS FAZER ASSIM TBM*******************/
function ePaisagem (l , a){
     return l > a ; //OU >=
    }
    console.log(ePaisagem(2000,1080));

//---------------------------------------- arrow function
const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(2000,1080));