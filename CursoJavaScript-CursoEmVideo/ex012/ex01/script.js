
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
function isNumero(n){ // se for numero entre 1 e 100
     if(Number(n) >=1 && Number(n) <=100){
          return true
     } else{
           return false}}
function inLista(n, l ){  // se o numero nao estiver na lista
     if (l.indexOf(Number(n)) != -1){
          return true
     }else {
          return false
}}
function adicionar(){
     if(isNumero(num.value) && !inLista(num.value, valores) ){
          valores.push(Number(num.value))
          let item = document.createElement('option')
          item.text =`Valor ${num.value} adicionado`
          lista.appendChild(item)
          res.innerHTML=''
     }else{
          window.alert('Valor invalido ou ja encontrado na lista')    
     }
     num.value ='' // deixa vazio a caixa de digitar o numero
     num.focus() //para focar na caixa de digitar o  numero
}

function finalizar(){
     if(valores.length ==0){
          window.alert ('adicione valores antes de finalizar')
     }else{
          let tot = valores.length

          let maior = valores [0]
          let menor = valores [0]

          let soma=0
          let media=0
          
          for(let pos in valores){
               soma += valores[pos]
               if(valores [pos] > maior)
                    maior=valores[pos]
               if (valores[pos] <menor)
                    menor=valores[pos]     
          }
          media = soma/tot

          res.innerHTML =''
          res.innerHTML += `<p> ao todo, temos ${tot} numeros cadastrados </p>`
          res.innerHTML += `<p>O maior valor é ${maior}</p>`
          res.innerHTML += `<p>O menor valor é ${menor}</p>`
          res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
          res.innerHTML += `<p>A media dos valores é ${media}</p>`
     }
}
