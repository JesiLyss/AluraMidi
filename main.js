function playsonidopom() {

    document.querySelector('#sonido_tecla_pom').play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');



while (0 <  9){

    listaDeTeclas[0].onclick = playsonidopom;

}




