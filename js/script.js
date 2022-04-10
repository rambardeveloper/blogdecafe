console.log("funciona");
//query selector
const heading = document.querySelector(".header__texto h2");// retorna 0 o 1 elemento
heading.classList.add('nueva-clase')
console.log(heading);
//query selector all
const links = document.querySelectorAll('a');
console.log(links.length);
links[0].classList.remove('navegacion__enlace');
links.forEach(link => {
    link.textContent = "Nuevo texto para enlaces";
    link.classList.add('nueva-clase-para-links');
    console.log(link);
});
//getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);

//generar un nuevo elemento
const nuevoEnlace = document.createElement('A');
//agregar href
nuevoEnlace.href = 'nuevo-enlace.html'
//agregar clase
nuevoEnlace.classList.add('navegacion__enlace')
//agregar texto a enlace
nuevoEnlace.textContent = 'Tienda virtual';
//agregar al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);

//eventos
console.log(1);

window.addEventListener('load', function(){ //espera a que js y los archivos que dependen de html esten listos
    console.log(2);
});

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){//solo esperan por el HTML, pero no espera por css o imagenes
    console.log(4);
});


console.log(5);

//Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton-primario');
// console.log(btnEnviar);
// btnEnviar.addEventListener('click', function(evento){
//     evento.preventDefault();
//     console.log(evento);
//     console.log("enviando a formulario");
// });



//eventos de los inputs y textareas

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');

nombreInput.addEventListener('input', escribiendo)

emailInput.addEventListener('input',  escribiendo)

mensajeInput.addEventListener('input',  escribiendo)


nombreInput.addEventListener('change', ()=>{ //se ejecuta al cambiar el estado del campo, por ejemplo al cambiar de campo
    console.log("Escribiendo");
});

// nombreInput.addEventListener('input', (e)=>{ //se ejecuta al cambiar el estado del campo, por ejemplo al cambiar de campo
//     console.log("Escribiendo: " + e.target.value);
// })


//evento de submit
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', () => {
    evento.preventDefault();
    console.log("Enviando a formulario");
})



function escribiendo(e){
    console.log("Escribiendo en " + e.target.name + ": " + e.target.value);
}