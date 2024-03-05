const form = document.querySelector('#formulario');//captura o formulario

//escutador
form.addEventListener('submit', function (event) { //pode ser e, em vez de event ou evento
     //Para o envento nao ser enviado automaticamente e somente quando for clicado no botao enviar
     event.preventDefault(); //previnir com default, pra nao ser enviado o fomulario

     //CAPTURAMOS OS DADOS DOS INPUT
     const inputPeso = event.target.querySelector('#peso');
     const inputAltura = event.target.querySelector('#altura');
     //target quer disser da onde esta vindo ese evento? do 'event'
     //console.log(inputPeso); //para conferir no inspecionar console

     //CONVERTENDO PARA NUMBER
     const peso = Number(inputPeso.value); //aqui pegamos o valor
     const altura = Number(inputAltura.value);

     //SE O NUMERO FOR INVALIDO
     if (!peso) { // se o peso for invalido ele para aqui o codigo
          setResultado('Peso Inválido', false);
          return;
     }
     if (!altura) {
          setResultado('Altura Inválida', false);
          return;
     }

     //CALCULAR O IMC ATRAVEZ DA FUNCAO 
     const imc = getImc(peso, altura); 

     //PEGAMOS O NIVEL DO IMC, O TEXTO TRAVEZ DA FUNCAO
     const nivelImc = getNivelImc(imc);

     const msg = `Seu IMC é ${imc} (${nivelImc}).`;
     setResultado(msg,true); //setando a mensagem

});

function getNivelImc(imc) { //criando um array
     const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
     if (imc >= 39.9) return nivel[5];
     if (imc >= 34.9) return nivel[4];
     if (imc >= 29.9) return nivel[3];
     if (imc >= 24.9) return nivel[2];
     if (imc >= 18.5) return nivel[1];
     if (imc < 18.5) return nivel[0];
}


//FUNÇAO PARA CALCULAR O IMC
function getImc(peso, altura) {
     const imc = peso / altura ** 2;
     return imc.toFixed(2);
}



function criaP() { //cria um paragrafo
     const p = document.createElement('p');
     return p; //retorna o p
}


function setResultado(msg, isValid) {// FUNCAO PARA COLOCAR O HTML DENTRO DA DIV RESULTADO
     const resultado = document.querySelector('#resultado');
     resultado.innerHTML = ''; //Zera o resultado, fica em branco a div

     const p = criaP();

     if(isValid){
          p.classList.add('paragrafo-resultado');
     }else {
          p.classList.add('paragrafo-bad');
     } 

     p.innerHTML = msg;
     resultado.appendChild(p);
}


