/*function meuEscopo (){
     const form = document.querySelector('.form');
      // se eu quiser selecionar uma classe eu coloco ('.FORM') e id ('#form')
      const resultado = document.querySelector( '.resultado');


    
      const pessoas = [];

    // form.onsubmit = function (evento){ //onsubit é onde eu qero receber a ação... on significa alguma funcao evente
         // evento.preventDefault();
       //   alert(1);

     function recebeEventoForm (evento){
      evento.preventDefault();

          const nome = form.querySelector('.nome');
          const sobrenome = form.querySelector('.sobrenome');
          const peso = form.querySelector('.peso');
          const altura = form.querySelector('.altura');

        console.log(nome,sobrenome,peso,altura);
     }

          
       form.addEventListener('submit', recebeEventoForm); // forma mais moderna, de escutar o evente
     
}
meuEscopo();*/


