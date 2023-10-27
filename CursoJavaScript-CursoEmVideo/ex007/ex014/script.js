//alert ("Ola")
function carregar (){
var msg = window.document.getElementById ('msg')
var img = window.document.getElementById ('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
//var hora = 7 //para manipular a hora
msg.innerHTML= `Agora são ${hora}:${minuto}horas.`

if (hora >= 0 && hora < 12){
     img.src = 'manha.png'
     document.body.style.background='#7b8a9d'
} else if (hora >= 12 && hora <=18){
     img.src = 'tarde.png'
     document.body.style.background='#7b8a9d'
}else{
     img.src = 'noite.png'
     document.body.style.background='#47395d'
}
}