function calcular(){
     let num =document.getElementById('txtnum')
     let tab =document.getElementById('seltab')
     if(num.value.length == 0){ //se a caixa for 0
          window.alert('[ERRO] Digite novamente')
     }else{
          let n= Number(num.value) // para converter o n em numero
          let c=1 //contador
          tab.innerHTML = '' // para deixar em branco
          while (c <=10){
               let item =document.createElement('option') //option do html
               item.text=`${n} x ${c} = ${n*c}`
               tab.appendChild(item) //o tab é o selct, que vai adicionar um elemento filho, que é o item
               c++
          }
     }
     
}