// Seleccionamos el elemento del sobre y la carta
const valentinesDayElement = document.querySelector('.valentines-day');
const card = document.querySelector('#card');

// Agregamos un evento de clic al sobre para abrir la carta
valentinesDayElement.addEventListener('click', () => {
  // Agregamos la clase 'opened' al contenedor de la carta para mostrarla
  card.style.visibility = 'visible';  // Aseguramos que la carta sea visible
  
  // Agregamos la clase 'hidden' al sobre para ocultarlo
  valentinesDayElement.classList.add('hidden');
});
