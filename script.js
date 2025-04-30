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

btnList.addEventListener('click', ()=>{
    posts.forEach(e => {
        e.classList.remove("col-md-4");
        e.classList.add("col-12")
    });
})

btnGrid.addEventListener('click',()=>{
    posts.forEach(e=>{
        e.classList.remove("col-12");
        e.classList.add("col-md-4");
    });
})