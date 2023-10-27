function verificar(){
var data = new Date() //data atual
var ano = data.getFullYear() // ano com 4 digitos
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res') // ou var res= document.getElementById('res')

if (fano.value.length == 0 || fano.value > ano ) { 
     // verifica se a caixa esta vazia se o comprimento é 0
     window.alert ('[Erro] Digite novamente')
} else {//masculino x feminino
     var fsex = document.getElementsByName ('radsex') // das bolotinhas 0 e 1
     var idade = ano - fano.value
     var genero = '' //string vazia

     var img =  document.createElement('img') // pra foto
     ///img.setAttribute('id', 'foto') //pra id da foto

     if (fsex [0].checked){ //bolinha 0 masculino
          genero ='HOMEM'
          if (idade >=0 && idade <10){
               //criança
               document.body.style.background=`#FF665A` //para mudar de cor se quiser
               img.setAttribute ('src','menino.png')
          }else if (idade <21){
               //jovem
               img.setAttribute ('src','jovemm.png')
          }else if (idade < 50){
               //adulto
               img.setAttribute ('src','adulto.png')
          }else {
               idoso
               img.setAttribute ('src','idoso.png')
          }



     }else if (fsex[1].checked){ //bolinha 1 feminino
          genero='MULHER'
          if (idade >=0 && idade <10){
               //criança
               img.setAttribute ('src','menina.png')
          }else if (idade <21){
               //jovem
               img.setAttribute ('src','jovemf.png')
          }else if (idade < 50){
               //adulto
               img.setAttribute ('src','adulta.png')
          }else {
               idoso
               img.setAttribute ('src','idosa.png')
          }
     }



     res.style.textAlign = 'center' // para centralizar
     res.innerHTML= `DETECTAMOS ${genero} com ${idade} anos.`
     res.appendChild (img) // para aparecer a imagem 
}
}