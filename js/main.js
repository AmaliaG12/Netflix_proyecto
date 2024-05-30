
const Películas_Populares = document.querySelectorAll('.Películas');

const flechaIzquierda = document.getElementById('flecha-izquierda');

const flechaDerecha = document.getElementById('flecha-derecha');




//? ----- ----- Event Listener para la flecha derecha ----- -----

flechaDerecha.addEventListener('click', () => {
    (document.querySelector('.contenedor-carousel')).scrollLeft += (document.querySelector('.contenedor-carousel')).offsetWidth;
});




//? ----- ----- Event Listener para la flecha izquierda ----- -----
flechaIzquierda.addEventListener('click', () => {
    (document.querySelector('.contenedor-carousel')).scrollLeft -= (document.querySelector('.contenedor-carousel')).offsetWidth;
});




//? ----- ----- Paginación ----- -----
const numeroPaginas = Math.ceil(películas.lenght / 4);
for(let i = 0; i < numeroPaginas; i++);





//? ----- ----- Hover ----- -----
Películas_Populares.forEach((Películas) => {
    Películas_Populares.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout (() => {
            Películas_Populares.forEach(Películas => Películas_Populares.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

(document.querySelector('.contenedor-carousel')).addEventListener('mouseleave', () => {
    Películas_Populares.forEach(Películas => Películas_Populares.classList.remove('hover'));
});


