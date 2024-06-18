function playsonidopom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

while (contador <  9){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(instrumento)


    const idAudio = `#sonido${instrumento}`;
    console.log(idAudio)





    listaDeTeclas[contador].onclick = playsonido();
    contador = contador + 1
    console.log('Vuelta ' + contador)
}




