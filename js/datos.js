
const usuarios = [
    {
        nombre: "nombre1",
        apellido: "apellido1",
        usuario: "usuario1",
        contrasena: "12345",
        correo: "correo1@correo.com",
        fechaNacimiento: "1990-01-01",
    },
    {
        nombre: "nombre2",
        apellido: "apellido2",
        usuario: "usuario2",
        contrasena: "12345",
        correo: "correo2@correo.com",
        fechaNacimiento: "1990-01-01",
    }
];
if(!localStorage.usuarios){
    localStorage.setItem ("usuarios",JSON.stringify(usuarios));
}
const productos = [
    {

    }
]

const recetas = [
    {

    }
]

const comentarios = [
    {
        
    }
]