
const apagarBtn = document.getElementById('boton')

apagarBtn.addEventListener('click', () => {
console.log('El boton apagar fue presionado');
document.body.classList.toggle('apagado');
document.body.classList.toggle('encendido')

apagarBtn.textContent = document.body.classList.contains('encendido')? 'PRENDER LUZ' : 'APAGAR LA LUZ';

})