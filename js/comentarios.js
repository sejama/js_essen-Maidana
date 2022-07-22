//import {idProducto} from './producto.js';
let comentarios = [];

JSON.parse(localStorage.comentarios).forEach(element => {
    comentarios.push(element)})

let idProducto = comentarios[comentarios.length - 1].producto;

fetch('../json/productos.json')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => 
        json.find((el) => el.id  ===  idProducto))
    .then(producto =>{
        let productos = document.getElementById("producto");
        let h1 = document.createElement("h1");
        h1.innerHTML =  "Sesión de los comentaiors del producto: " + producto.nombre;
        productos.appendChild(h1);
    })

  //Filtramos todos los comentarios de cierto producto
let filtrado = [];
comentarios.forEach(obj => {
    obj.producto === idProducto ? filtrado.push(obj) : null;
})
console.log(comentarios);
console.log(filtrado);

let divcomentario = document.getElementById("comentarios");
let divCard = document.createElement("div");
divCard.className = "card";
let h5Header = document.createElement("h5");
h5Header.className = "card-header";
h5Header.innerHTML = "El Usuario.nombre Usuario.apellido, comento el dia fecha";
let divCardBody = document.createElement("div");
divCardBody.className = "card-body";
let h5Body = document.createElement("h5");
h5Body.className = "card-title";
h5Body.innerHTML = "Titulo del comentario";
let p = document.createElement("p");
p.className = "card-text";
p.innerHTML = "Aqui va el comentario realizado por el usuario";
let a = document.createElement("a");
a.className = "btn btn-primary";
a.innerHTML = "Responder";

divCardBody.appendChild(h5Body);
divCardBody.appendChild(p);
divCardBody.appendChild(a);

divCard.appendChild(h5Header);
divCard.appendChild(divCardBody);

divcomentario.appendChild(divCard);