const data = new Date();
const res = document.querySelector('.diaSemana');
res.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });