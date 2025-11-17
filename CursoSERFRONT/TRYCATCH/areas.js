function calcularAreaRetangulo( l, a){
     if(typeof l !== "number" || typeof a !== "number"){
          throw new Error ("clacularAreaRetangulo aceita dois parametros do tipo number")
          /*nada que tiver embaixo dentrovai ser executado, é como se fosse um erro custumizado*/
     }
     return l * a
}

function calcularAreaTriangulo( b, a){
     if(typeof b !== "number" || typeof a !== "number"){
          throw new Error ("clacularAreaRetangulo aceita dois parametros do tipo number")
          /*nada que tiver embaixo dentrovai ser executado, é como se fosse um erro custumizado*/
     }
     return (b * a) / 2
}