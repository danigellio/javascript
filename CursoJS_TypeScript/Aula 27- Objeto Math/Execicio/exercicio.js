const numero = Number(prompt('Digite um nuumero:'));
const numeroTitulo = document.getElementById('numero-title'); // ele seleciona o id do span
const texto = document.getElementById('texto'); //seleciona o texto da div

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5} </p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p> Tipo do numero: ${typeof(numero)} </p>`;
texto.innerHTML += `<p> Arredondando para cima: ${Math.floor(numero)} </p> `
texto.innerHTML += `<p> Arredondando para baixo: ${Math.ceil(numero)} </p>`
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`
