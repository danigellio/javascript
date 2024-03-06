const data = new Date('2024-03-06');
let diaSemana = data.getDay();
let diaSemanaTexto;
diaSemana = 7;

switch (diaSemana) {
     case 0:
          diaSemanaTexto = 'Domingo';
          break;
     case 1:
          diaSemanaTexto = 'Segunda';
          break;
     case 2:
          diaSemanaTexto = 'Terça';
          break;
     case 3:
          diaSemanaTexto = 'Quarta';
          break;
     case 4:
          diaSemanaTexto = 'Quinta';
          break;
     case 5:
          diaSemanaTexto = 'Sexta';
          break;
     case 6:
          diaSemanaTexto = 'Sabaco';
          break;
     default:
          diaSemanaTexto= '';
}
console.log(diaSemana);

function getdiaSemanaTexto(diaSemanaD){
     let diaSemanaTexto;

     switch (diaSemanaD) {
     case 0:
          diaSemanaTexto = 'Domingo';
          //return diaSemanaTexto; posso colocar isso e retirar o break

          break;
     case 1:
          diaSemanaTexto = 'Segunda';
          break;
     case 2:
          diaSemanaTexto = 'Terça';
          break;
     case 3:
          diaSemanaTexto = 'Quarta';
          break;
     case 4:
          diaSemanaTexto = 'Quinta';
          break;
     case 5:
          diaSemanaTexto = 'Sexta';
          break;
     case 6:
          diaSemanaTexto = 'Sabaco';
          break;
     default:
          diaSemanaTexto= '';
}
return diaSemanaTexto;
}

const diaSemanaTextoS = getdiaSemanaTexto();
let diaSemanaS = data.getDay();
console.log(diaSemanaS, diaSemanaTextoS);