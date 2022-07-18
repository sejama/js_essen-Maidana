import {Usuario} from './modelo.js';

const usuarios = [];
localStorage.usuarios ? 
    JSON.parse(localStorage.usuarios).forEach(element => {
    usuarios.push(element);
    }) 
    : NULL;
    
let nombre = document.getElementById("inputNombre");
let apellido = document.getElementById("inputApellido");
let validoNomApe = false;

nombre.onchange=()=>{
    let encontroNombre = usuarios.some((el)=> el.nombre == nombre.value);
    apellido.onchange=() => {
        let encontroApellido = usuarios.some((el)=> el.apellido === apellido.value);
        (encontroNombre && encontroApellido) ? alert("Nombre y Apellido existente") : validoNomApe = true;
    }
};
apellido.onchange=() => {
    let encontroApellido = usuarios.some((el)=> el.apellido === apellido.value);
    nombre.onchange=()=>{
        let encontroNombre = usuarios.some((el)=> el.nombre == nombre.value);
        (encontroNombre && encontroApellido) ? alert("Nombre y Apellido existente") : validoNomApe = true;
    }
};
let user = document.getElementById("inputUsuario");
user.onchange=()=>{
    let encontroUsuario = usuarios.some((el)=> el.usuario === user.value);
    encontroUsuario ? alert("Usuario existente") : '';
}

let formulario = document.getElementById("formulario-registrar");
formulario. addEventListener ("submit", registrar);
function registrar(e){
    e.preventDefault();

    let formulario = e.target
    let nombre = formulario.children[0].children['inputNombre'].value;
    let apellido = formulario.children[1].children['inputApellido'].value;
    let correo = formulario.children[2].children['inputCorreo'].value;
    let fecha = new Date(formulario.children[3].children['inputFechanacimiento'].value);
    let user = formulario.children[4].children['inputUsuario'].value;
    let pass = formulario.children[5].children['inputContrasena'].value;

    let encontroUsuario = usuarios.some((el)=> el.usuario === user);
    
    let nuevo = new Usuario(nombre, apellido, user, pass, correo, fecha);
    
    if(nuevo && !encontroUsuario){
        usuarios.push(nuevo);
        localStorage.setItem("usuarios", JSON.stringify(usuarios)); //JSON.parse(localStorage.usuarios))
        formulario.reset();
        /*let div = document.createElement("div");
        div.className = "alert alert-success";
        div.innerHTML = `role="alert"`;
        div.innerText = "Gurdado con exito!";
        document.body.appendChild(div);*/
        Swal.fire({
            title:'Bienvenido!',
            text:'Ahora que ya estas registrado, podras realizar comentarios y puntuar!',
            icon:'success',
            timer: 3000
        }).then(() => {
            window.location.href="ingresar.html";
        })    
    }else{
        alert("Usuario existente!");
    }
}
