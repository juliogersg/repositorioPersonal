/**
 * Atrapar a todos los elementos card
 */

const cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
    /**
     * elemento.onmouseover
     * evento que se dispara cuando el mouse pasa por encima
     * del elemento
     */
    card.onmouseover = ()=>{
        card.classList.remove('shadow-sm');
        card.classList.add('shadow');
    }
    /**
     * elemento.onmouseout
     * evento que se dispara cuando el mouse libera o sale
     * del area de un elemento
     */
    card.onmouseout = ()=>{
        card.classList.remove('shadow');
        card.classList.add('shadow-sm');
    }
})