function relogio(){
function criaHora(segundos){
     const data = new Date(segundos * 1000);// para virar segundos quando multiplicamos por 1000 os milessimos de segundos
     return data.toLocaleTimeString('pt-BR',{hour12:false,// para nao ser horas com 12somente
          timeZone: 'GMT' //ou UTC
     });
}

//console.log(criaHora(10));


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;


function iniciarRelogio(){
     timer = setInterval(function(){// a cada um segundo ele soma um segundo
          segundos++;
          relogio.innerHTML = criaHora(segundos);
     },1000);
}


document.addEventListener('click', function(e){
     const el =  e.target;

     if(el.classList.contains('zerar')){
          clearInterval(timer);
     relogio.innerHTML = '00:00:00';
     segundos =0;
     relogio.classList.remove('pausado');
     }

     if(el.classList.contains('iniciar')){
     clearInterval(timer); 
     iniciarRelogio(); //chamando a função
     relogio.classList.remove('pausado');
     }

     if(el.classList.contains('pausar')){
          clearInterval(timer);
     
          relogio.classList.add('pausado');
     }
     
});

}
relogio();
/* PODEMOS FAZER ASSIM OU DA FORMA ACIMA
iniciar.addEventListener('click', function(event){
    // alert('cliquei no iniciar');
    // se quiser que apareça msg no .relogio 
    //relogio.innerHTML = 'cliquei'.
  clearInterval(timer); 
  iniciarRelogio(); //chamando a função
  relogio.classList.remove('pausado');
});
pausar.addEventListener('click', function(event){
     clearInterval(timer); //para zerar
     relogio.classList.add('pausado');


}); 
zerar.addEventListener('click', function(event){
     clearInterval(timer);
     relogio.innerHTML = '00:00:00';
     segundos =0;
     relogio.classList.remove('pausado');

}); */