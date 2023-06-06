function contar(){
var inicio = document.querySelector('input#numini')
var fim = document.querySelector('input#numfim')
var passo = document.querySelector('input#passo')

/*if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
     //alert ('[Erro]') pra teste
}else{
     //alert ('ok') pra teste
     res.innerHTML = ' contando:...'
} // para testarmos o*/

if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
     res.innerHTML = 'Impossivel contar'
}else{
     res.innerHTML = ' Contando:...'
     var i = Number(inicio.value)
     var f = Number (fim.value)
     var p = Number(passo.value)
     if (p <=0){
          alert('Passo invalido. Considerando passo1')
          p = 1
     }
     if (i <f){
          // contagem crescente
          for (var c=i; c <=f; c+=p){ // c recebe ele mesmo e o passo
               res.innerHTML+= `${c} \u{1F449}` // \u{...} colocamos para por emoji e retiramos o U+
          }
     }else {
          //contagem regressiva
          for(var c=i; c >=f;c-=p){
               res.innerHTML+= `${c} \u{1F449}`
          }
     }
     res.innerHTML += `\u{1F3C1}` // += contatenaçao
} 
     
 }