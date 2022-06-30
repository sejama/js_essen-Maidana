
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
        id: 1,
        nombre: "Sartén 24cm",
        descripcion: "Sartén 24cm",
        categoria: "Línea Contemporánea Terra",
        precio: 15000,

    },
    {
        id: 2,
        nombre: "Sartén 30cm",
        descripcion: "Sartén 30cm",
        categoria: "Línea Contemporánea Terra",
        precio: 18000,
    },
]

const recetas = [
    {
        id: 1,
        titulo: "Ratatouille",
        descripcion: "Tiempo aproximado: 25 Porciones: 8 ",

    }
]

const comentarios = [
    {
        prodcuto: "", 
        receta: 1, 
        usuario: "usuario1", 
        comentario: "Excelente receta, muy rico", 
        fecha: "2022-02-25"
    }
    {
        prodcuto: 2, 
        receta:  "", 
        usuario: "usuario1", 
        comentario: "Excelente producto, muy buena calidad para realizar cualquie comida", 
        fecha: "2022-04-18"
    }
]