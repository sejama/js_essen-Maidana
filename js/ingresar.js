import {Usuario} from './modelo.js';

const usuarios = [];
if(localStorage.usuarios){
    let datos = JSON.parse(localStorage.usuarios)
    datos.forEach(element => {
    usuarios.push(element);
    });
    console.log(usuarios);
}
let existe = false;
let user = document.getElementById("inputUsuario");
user.onchange=()=>{
    let encontroUsuario = usuarios.some((el)=> el.usuario === user.value);
    if(encontroUsuario){
        existe = true;
    }
}

let pass = document.getElementById("inputContrasena");
pass.onchange=()=>{
    let encontroPass = usuarios.some((el)=> el.contrasena === pass.value);
    if(encontroPass){
        existe = true;
    }
}



let formulario = document.getElementById("formulario-ingresar");
formulario. addEventListener ("submit", ingresar);
function ingresar(e){
    e.preventDefault();

    let formulario = e.target

    let user = formulario.children[0].children['inputUsuario'].value;
    let pass = formulario.children[1].children['inputContrasena'].value;

    let encontroUsuario = usuarios.some((el)=> el.usuario === user);
    let encontroPass = usuarios.some((el)=> el.contrasena === pass);
    if(encontroUsuario && encontroPass){
        let h2 = document.createElement("h2");
        h2.innerText = "hola " + user + ", bienvenido a la entrega número 2!!!";
        document.body.appendChild(h2);
        formulario.reset();
    }else{
        alert("Usuario y Contraseña incorrecto");
    }

}