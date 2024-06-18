function playsonidopom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

while (contador <  9){

    listaDeTeclas[contador].onclick = playsonido();
    contador = contador + 1
    console.log('Vuelta ' + contador)
}




