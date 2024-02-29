function meuEscopo (){
  const form = document.querySelector('.form');
  const res = document.querySelector('.resultado');
  const pessoas = []; // o array esta vazio pq o que vai preencher sera oq enviamos no formulario
 
  function recebeEventoForm(evento){
    evento.preventDefault();


    //seleciona os input
    const nome = form.querySelector('.nome'); 
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura =  form.querySelector('.altura');


    //console.log(nome.value,sobrenome,peso,altura);//com value eu pego os valores ex: nome.value

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });
    console.log(pessoas);

    //para mostrar no Resultado
    res.innerHTML += `<p> ${nome.value} ${sobrenome.value} `+`${peso.value} ${altura.value}<p>`;
    }


  form.addEventListener('submit', recebeEventoForm); 
  //forma mais moderna, de escutar o evente, adiciona um escutador de evento
}

meuEscopo();

//VARIAVEIS DENTRO DA FUNÇÃO SAO SOMENTE DENTRO DA FUNÇÃO, E  NAO GLOBAL
//se eu quiser selecionar uma classe eu coloco ('.FORM') e id ('#form')
// form.onsubmit = function (evento){ //onsubit é onde eu qero receber a ação... on significa alguma funcao evente
 // evento.preventDefault(); //diz para o navegador se previnir  oq era p acontecer por padrao e nao envia o formulario

     


