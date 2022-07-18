import {Usuario} from './modelo.js';

const usuarios = [];
localStorage.usuarios ? 
    JSON.parse(localStorage.usuarios).forEach(element => {
    usuarios.push(element)
    }) : NULL;

let existe = false;
let user = document.getElementById("inputUsuario");
user.onchange=()=>{
    let encontroUsuario = usuarios.some((el)=> el.usuario === user.value);
    encontroUsuario ? existe = true : null;
}

let pass = document.getElementById("inputContrasena");
pass.onchange=()=>{
   usuarios.some((el)=> el.contrasena === pass.value) ? existe = true : null;
}

let formulario = document.getElementById("formulario-ingresar");
formulario. addEventListener ("submit", ingresar);
function ingresar(e){
    e.preventDefault();

    let formulario = e.target

    let user = formulario.children[0].children['inputUsuario'].value;
    let pass = formulario.children[1].children['inputContrasena'].value;

    //let encontroUsuario = usuarios.some((el)=> el.usuario === user);
    let encontroPass = usuarios.some((el)=> el.contrasena === pass);
    const  encontroUsuario = usuarios.find((el) => el.usuario ===  user);
    
    if(encontroUsuario && encontroPass){
        const {nombre, apellido, usuario} = encontroUsuario;
        let h2 = document.createElement("h2");
        h2.innerText = "hola " + nombre + " " + apellido +", bienvenido a la entrega número 2!!!";
        let h3 = document.createElement("h3");
        h3.innerText = "Proximamente podra realizar comentarios y puntuar los productos essen y las recetas.";
        document.body.appendChild(h2);
        document.body.appendChild(h3);
        formulario.reset();
        let ingresoOcultar = document.getElementsByClassName("ocultar");
        ingresoOcultar[0].style.display = 'none'; // hide
        ingresoOcultar[1].style.display = 'none'; // hide
        let ingresoMostrar = document.getElementsByClassName("mostrar");
        ingresoMostrar[0].style.display = 'block';
        console.log(ingresoMostrar);
        formulario.style.display = 'none';
        sessionStorage.setItem("usuario", JSON.stringify(encontroUsuario));
    }else{
        alert("Usuario y Contraseña incorrecto");
    }

}