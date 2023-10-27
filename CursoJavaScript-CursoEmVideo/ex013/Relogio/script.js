function carregar(){
     let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    let data= new Date()
    let hora= data.getHours()
    let minuto= data.getMinutes()
   
     
    msg.innerHTML= `<p>${hora}:${minuto}</p>`
    
    if( hora >= 0 && hora <12){
     photo.src = 'manha.png'
     
    }else if( hora >=12 && hora <18){
     photo.src = 'tarde.png'
    }else if( hora >=18 && hora <20){
     photo.src ='entardecer.png'
    }else{
     photo.src = 'manha.png'
    }
}
