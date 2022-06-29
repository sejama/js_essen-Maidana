//import {Usuario} from './modelo.js';
class Usuario{
    constructor(nombre, apellido, usuario, contrasena, correo, fechaNacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.correo = correo;
        this.fechaNacimiento = fechaNacimiento;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    setApellido(apellido){
        this.apellido = apellido;
    }
    setUsuario(usuario){
        this.usuario = usuario;
    }
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getUsuario(){
        return this.usuario;
    }
    getDia(){
        return this.fechaNacimiento.getDay();
    }
    getMes(){
        return this.fechaNacimiento.getMonth() + 1  ;
    }
    getYear(){
        return this.fechaNacimiento.getFullYear();
    }
}

const usuarios = [];
let datos = JSON.parse(localStorage.usuarios)
datos.forEach(element => {
    usuarios.push(element);
});
console.log(usuarios);


let nombre = document.getElementById("inputNombre");
let apellido = document.getElementById("inputApellido");

nombre.onchange=()=>{
    console.log(nombre.value)
    let encontroNombre = usuarios.some((el)=> el.nombre == nombre.value);
    console.log(encontroNombre)
    apellido.onchange=() => {
        console.log(apellido.value)
        let encontroApellido = usuarios.some((el)=> el.apellido === apellido.value);
        console.log(encontroApellido)
        if (encontroNombre && encontroApellido){
            alert("Nombre y Apellido existente");
        }
    }
};
    





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

    //let encontroUsuario = usuarios.some((el)=> el.usuario === user);
    
    let nuevo = new Usuario(nombre, apellido, user, pass, correo, fecha);
    console.log(nuevo);
    if(nuevo){
        usuarios.push(nuevo);
        localStorage.setItem("usuarios", JSON.stringify(usuarios)); //JSON.parse(localStorage.usuarios))
        console.log(usuarios);
        formulario.reset()
    }
}
