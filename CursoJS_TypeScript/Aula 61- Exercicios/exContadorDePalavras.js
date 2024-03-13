// Escreva uma função que receba uma string como entrada e conte o número de palavras na string.

function contarPalavras(frase){
 // Remove espaços em branco no início e no final da frase
frase = frase.trim();

    // Se a frase for vazia, retorna 0

if(frase ===""){
     return 0;
}
// Divide a frase em palavras usando um ou mais espaços como separador
const palavras = frase.split(/\s+/);

// Retorna o número de palavras na frase

return palavras.length;



}

const frase01= "ola mundo";
console.log(contarPalavras(frase01));