const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav_cerrar");

//Mostrar menu
if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('mostrar-menu')
    }) 
}

//Ocultar menu
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('mostrar-menu')
    })
}

//Remover el menu dando en cualquier "li" de la lista
const navLink = document.querySelectorAll('nav_link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')

        navMenu.classList.add('mostrar-menu')
}
navLink.forEach (n => n.addEventListener('click', linkAction))