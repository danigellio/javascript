try{
     //é executado quando nao ha erros
     console.log(a); //vai pro catch
     console.log('TRY: abri um arquivo');
     console.log('TRY: manipulei o arquivo e deu erro');
     console.log('TRY: fechei o arquivo');
}catch(e){
     console.log('tratando o erro');
     // é executado quando ha erros
} finally{
     console.log('FINALLY: eu sempre sou executado');
     //sempre
}

//------------------------------------------
try{
     //é executado quando nao ha erros
     //console.log(a); //vai pro catch
     console.log('TRY: abri um arquivo');
     console.log('TRY: manipulei o arquivo e deu erro');
     console.log('TRY: fechei o arquivo');

     try{
          console.log(b);
     }catch(e){
          console.log('----deu erro');
     }finally{
          console.log('----tbm sou finally');
     }
}catch(e){
     console.log('tratando o erro');
     // é executado quando ha erros
} finally{
     console.log('FINALLY: eu sempre sou executado');
     //sempre
}

//-------FUNCAO QUE RETORNA HORA 
function retornaHora(data){
     //se a data for enviado e nao for instancia de date, mostro o erro
     if(data && !(data instanceof Date)){ //INSTANCEOF quer disser que data é uma instancia do date
          throw new TypeError('Esperando instancia de Date');
     }
     if(!data){
          data = new Date();
     }
     return data.toLocaleTimeString('pt-BR',{
          hour:'2-digit', //podemos por
          minute: '2-digit', //podemos por
          second: '2-digit', // podemos por
          hour12:false
     });
}
try{
     const data= new Date('01-01-1970 12:58:12');
     const hora = retornaHora(11);
     console.log(hora);
}catch(e){
     //tratar o erro
     //console.log(e);
}finally{
     console.log('tenha um bom dia');
}