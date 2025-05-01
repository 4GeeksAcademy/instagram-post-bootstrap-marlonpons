/*Logica para cambiar el color en los selectores de cambio de vista*/

const buttonsView = document.querySelectorAll('.viewSingleTable')

buttonsView.forEach(button=>{
    //evento de click a cualquiera de los dos botones para cambiar la vista
    button.addEventListener('click',()=>{
        //se elimina la clase text-primary activa para ambos
        buttonsView.forEach(btn=> btn.classList.remove('text-primary'));
        //se grega el text-primary solo al elemento clickeado
        button.classList.add('text-primary');
    });
});

/*logica para cambiar la vista de forma de lista a forma de cuadricula*/

const btnList = document.getElementById("view-list");
const btnGrid = document.getElementById("view-grid");
const posts = document.querySelectorAll('.post');
const postTexts = document.querySelectorAll('.card-text');
const postHeader= document.querySelectorAll('.card-header');

btnList.addEventListener('click', ()=>{
    posts.forEach(e => {
        e.classList.remove("col-md-4");
        e.classList.add("col-12")
    });
    postTexts.forEach(text => {
        text.classList.remove("d-none");
    });
    postHeader.forEach(header=>{
        header.classList.remove("d-none");
    });
})

btnGrid.addEventListener('click',()=>{
    posts.forEach(e=>{
        e.classList.remove("col-12");
        e.classList.add("col-md-4");
    });
    postTexts.forEach(text => {
        text.classList.add("d-none");
    });
    postHeader.forEach(header=>{
        header.classList.add("d-none");
    });
})