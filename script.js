
const buttonsView = document.querySelectorAll('.viewSingleTable')
const btnList = document.getElementById("view-list");
const btnGrid = document.getElementById("view-grid");
const postContainer =document.getElementById("post-container");
const posts = document.querySelectorAll('.post');
/*variables para quitar el texto de los post usando display none*/
const postTexts = document.querySelectorAll('.card-text');
const postHeader= document.querySelectorAll('.card-header');
/*variable para cambiar el estilo de las fotos*/
const postImages = document.querySelectorAll(".post-img");

/*para que cuando se cargue la pagina por primera vez se muestre en view-list simulando un click en el boton list*/
window.addEventListener('DOMContentLoaded', () => {
    btnList.click();
});

/*Logica para cambiar el color en los selectores de cambio de vista*/
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
btnList.addEventListener('click', ()=>{
    posts.forEach(e => {
        e.classList.remove("col-md-4");
        e.classList.add("col-12")
    });

    postContainer.classList.add("d-flex","flex-column","align-items-center");
    postTexts.forEach(text => text.classList.remove("d-none"));
    postHeader.forEach(header => header.classList.remove("d-none"));
    postImages.forEach(img => {
        img.classList.remove("ratio", "ratio-1x1");
    });
});


btnGrid.addEventListener('click',()=>{
    posts.forEach(e=>{
        e.classList.remove("col-12");
        e.classList.add("col-md-4");
    });

    postContainer.classList.remove("d-flex","flex-column","align-items-center");
    postTexts.forEach(text => text.classList.add("d-none"));
    postHeader.forEach(header => header.classList.add("d-none"));
    postImages.forEach(img => {
        img.classList.add("ratio","ratio-1x1"); //Hace las imagenes cuadradas usando ratio y ratio-1x1
    });
})

