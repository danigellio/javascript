const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');//selecionando os p da div

//PARA PEGAR COR DO BODY
const estiloBody = getComputedStyle(document.body); //paga todo estilo computado no body
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
     //console.log(p);
     //COLOCANDO CSS NO JS
     p.style.backgroundColor = backgroundColorBody;
     p.style.color = '#FFFFFF';
}
