var agora = new Date()  //para ver a hora
var hora = agora.getHours() //tem varios gets de hora data
console.log (`Agora são exatamente ${hora} horas.`)
if( hora <12){
     console.log ('BOM DIA !')
}else if (hora <=18){
     console.log ('BOA TARDE')
}else{
     console.log ('BOA NOITE')
}