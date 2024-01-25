let indice = 0;
cambiarImagenes();

function cambiarImagenes() {
    let i;
    let imagenes = document.getElementsByClassName("carrusel-imagenes")[0].getElementsByTagName("img");
    for (i = 0; i < imagenes.length; i++) {
       imagenes[i].style.opacity = "0";
    }
    indice++;
    if (indice > imagenes.length) {indice = 1}
    imagenes[indice - 1].style.opacity = "1";
    setTimeout(cambiarImagenes, 4000); // Cambia cada 4 segundos
}