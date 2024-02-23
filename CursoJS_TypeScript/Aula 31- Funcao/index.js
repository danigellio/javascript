//funcao faz alguma açao
//tdo oq esta dentro da funcao pertence a funcao

function saudacao(){
     //console.log('Bom dia');

} // nao preciça de ;
saudacao();


function cadastro(nome){
    // console.log(`Bom dia ${nome}`);
}
cadastro('luiz');
cadastro('maria');



function mercado(item){
    // console.log(`Bom dia ${item}`); 
     return (`Bom dia ${item}`);
}
const variavel = mercado ('arroz');
console.log(variavel);




//soma
function soma(x,y){
     const resultado = x + y; //oq esta dentro da funcao esta protegido, nao consigo acessar ou usar isso fora da funcao
     return resultado;  // encerra a funçao aqui, ele nao le mais nada depois de return
}
console.log(soma(2,2));
//podemos fazer isso, mas continua a somar
const resultado = soma (2,2);
console.log(resultado);



//posso deixar ja com valor no x e y, caso eu nao passe nenhum valor
function somax (x = 1 , y = 1) {
     const resultadoi = x + y; 
     return resultadoi; 
}
const resultadoi = somax (); // nao estou passando nada de parametro, se eu colocar soma (4) ela substitui o x , se eu colocar ( 5, 2) ele substitui o x1 e y2
console.log(resultado);


//outra maneira de criar funçoes
const  raiz = function (n){ 
     return n** 0.5;
};
console.log(raiz(9));



//podemos substituir  o function por => e tirar os () e {} ;
const  raizQuadrada =  n => n** 0.5;

console.log(raiz(16));


