function mostraHora(){
     let data = new Date();

     return data.toLocaleTimeString('pt-BR',{hour12:false});

}


const timer = setInterval(function(){
     console.log(mostraHora());
}, 1000); // de um em um seg ele muda a hora

setTimeout(function() {
     clearInterval(timer);
}, 3000); //dura 3 seg

setTimeout(function(){
     console.log('ola mundo');
}, 5000); // depois de 5 seg ele mostra a mensagem

/**
 * //function funcaoDoIntervalo(){
//     console.log(mostraHora());
//}

//setInterval(function(){
//     console.log(mostraHora());
//}, 1000); 
 //ou podemos fazer assim

//setInterval(funcaoDoIntervalo,1000); podemos fazer assim
//ou com constante
 */
