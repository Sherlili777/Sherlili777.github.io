const fila = document.querySelector('.contenedor-carrusel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda')
const flechaDerecha = document.getElementById('flecha-derecha')

// Event Listener para la flecha derecha. Para mover las imagenes
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

// Event Listener para la flecha izquierda.
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

// Paginacion. Primero hace un calculo para saber cuantos botos debe crear
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i <numeroPaginas; i++){
    const indicador = document.createElement('button');

    //Despues de crear los botones le da la clase activo al primero.
    if(i === 0){
        indicador.classList.add('activo');
    }
    document.querySelector('.indicadores').appendChild(indicador);

    //Cuando se selecciona un boton hace el calculo para llevarte a esa pagina  segun la posicion en la que te encuentras
    indicador.addEventListener('click', (e)=> {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
}

//Hover. Animacion para que se haga grande la pelicula cuando este el cursor sobre de ella
peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        //Cuando se pone el cursor encima de otra imagen elimina el efecto en la imagen anterior
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover')
        }, 300);
    });
});

//Elimina el efecto cuando el cursor no esta sobre ninguna imagen
fila.addEventListener('mouseleave', () =>{
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
})