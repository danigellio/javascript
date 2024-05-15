const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-taref');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
     const li = document.createElement('li');
     return li;
}

inputTarefa.addEventListener('keypress', function(e){ //funcao para quando precionado o enter, ele tbm manda, nao somente com  a opçao do botao
     if(e.keyCode === 13){
          if(!inputTarefa.value) return;
          criaTarefa(inputTarefa.value);
     }
});
//keyup, quando aperta e solta tecla
//keydown quando aperta e tecla e nao solta

function limpaInput(){ //aqui é uma funcao para limpar
     inputTarefa.value = ''; // para limpas
     inputTarefa.focus(); // pra quando tiver foco no local
}

function criaBotaoApagar(li){//criando botao apagar

     li.innerText += ' ';
     const botaoApagar = document.createElement('button');
     botaoApagar.innerText = 'Apagar';
botaoApagar.setAttribute('class', 'apagar');// criando uma classe para o botao apagar, aqui podemos tbm modificar o botao pois criamos uma classe
botaoApagar.setAttribute('title', 'Apagar essa tarefa'); //criamos um title que quando passo o mouse ele aparece essa mensagem
     li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
     const li = criaLi();
     li.innerText = textoInput;
     tarefas.appendChild (li);
     limpaInput();
     criaBotaoApagar(li);
     salvarTarefa();
}


btnTarefa.addEventListener('click', function(){ //criando uma funcao para o click, para quando clicarmos no botao
     if (!inputTarefa.value) return; //se o input tarefa nao tiver nada ele nao manda
     criaTarefa(inputTarefa.value);
});

//ELE MOSTRA NO CONSOLE, AONDE ESTOU CLICANDO SE É NO BODY, ETC...
/*document.addEventListener('click', function(e){
     const el = e.target;
     console.log(el);
});*/

//apagar a li quando eu clico no apagar
document.addEventListener('click', function(e){
     const el = e.target;

     if (el.classList.contains('apagar')){
          el.parentElement.remove();
     }
});

//para salvar a tarefas
function salvarTarefa(){
     const liTarefas = tarefas.querySelectorAll('li');
     const listaDeTarefas = [];

     for(let tarefa of liTarefas){ //criando um array com os dados inseridos
          let tarefaTexto = tarefa.innerText;
          tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //esse trim remova o espaço
          listaDeTarefas.push(tarefaTexto);
     }
     const tarefaJSON = JSON.stringify(listaDeTarefas); // criando um array em forma de JSON, que posso salvar, e posso puxar ele da onde foi salvo e usar
    localStorage.setItem('tarefa', tarefaJSON); //local onde posso salvar coisas no navegador, vc vai no inspecionar do lado do console vc ve o aplication, local storage, e ele fica la
}