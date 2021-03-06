import { comentarProducto } from "./producto.js";
import { comentarReceta } from "./receta.js";

let comentarios = [];
let usuarioLog;
let idProducto, idReceta;
let filtrado = [];

if (localStorage.comentarios) {
    JSON.parse(localStorage.comentarios).forEach((element) => {
        comentarios.push(element);
    });
} else {
    fetch("../json/comentarios.json")
        .then((response) => response.json()) // convertir a json
        .then((json) => localStorage.setItem("comentarios", JSON.stringify(json))) //cargamos los datos al localstorage
        .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores

    JSON.parse(localStorage.comentarios).forEach((element) => {
        comentarios.push(element);
    });
}

if (sessionStorage.usuario) {
    usuarioLog = JSON.parse(sessionStorage.usuario);
}

if (window.location.href.includes("producto.html")) {
    idProducto = parseInt(localStorage.getItem("producto"));
    let nombreProducto;
    fetch("../json/productos.json")
        // Exito
        .then((response) => response.json()) // convertir a json
        .then((json) => json.find((el) => el.id === idProducto))
        .then((producto) => {
            nombreProducto = producto.nombre;
            let productos = document.getElementById("producto");
            let h1 = document.createElement("h1");
            h1.innerHTML =
                "Sesión de los comentaiors del producto: " + producto.nombre;
            productos.appendChild(h1);
        });

    //Filtramos todos los comentarios de cierto producto

    comentarios.forEach((obj) => {
        obj.producto === idProducto ? filtrado.push(obj) : null;
    });
    if (filtrado.length === 0) {
        let divcomentario = document.getElementById("comentarios");
        let h2 = document.createElement("h2");
        h2.innerHTML = "El producto no contiene comentarios";
        divcomentario.appendChild(h2);
    } else {
        filtrado.forEach((element) => {
            let divcomentario = document.getElementById("comentarios");
            let divCard = document.createElement("div");
            divCard.className = "card";
            let h5Header = document.createElement("h5");
            h5Header.className = "card-header";
            h5Header.innerHTML = `El ${element.usuario}, comento el ${element.fecha}`;
            let divCardBody = document.createElement("div");
            divCardBody.className = "card-body";
            let h5Body = document.createElement("h5");
            h5Body.className = "card-title";
            h5Body.innerHTML = "Comentario";
            let p = document.createElement("p");
            p.className = "card-text";
            p.innerHTML = element.comentario;

            divCardBody.appendChild(h5Body);
            divCardBody.appendChild(p);

            if (usuarioLog) {
                if (usuarioLog.usuario === element.usuario) {
                    let boton = document.createElement("button");
                    boton.className = "btn btn-danger comentar";
                    boton.innerHTML = "Eliminar";
                    boton.onclick = function () {
                        eliminar(element.comentario);
                    };
                    divCardBody.appendChild(boton);
                }
            }

            divCard.appendChild(h5Header);
            divCard.appendChild(divCardBody);

            divcomentario.appendChild(divCard);
        });
    }
    if (usuarioLog) {
        let divboton = document.getElementById("boton");
        let boton = document.createElement("button");
        boton.className = "btn btn-primary comentar";
        boton.innerHTML = "Comentar";
        boton.onclick = function () {
            comentarProducto(idProducto, nombreProducto);
        };
        divboton.appendChild(boton);
    }
}

if (window.location.href.includes("receta.html")) {
    let idReceta = parseInt(localStorage.getItem("receta"));
    let nombreReceta;
    fetch("../json/recetas.json")
        // Exito
        .then((response) => response.json()) // convertir a json
        .then((json) => json.find((el) => el.id === idReceta))
        .then((receta) => {
            nombreReceta = receta.nombre;
            let recetas = document.getElementById("receta");
            let h1 = document.createElement("h1");
            h1.innerHTML = "Sesión de los comentaiors de la receta: " + receta.nombre;
            recetas.appendChild(h1);
        });

    //Filtramos todos los comentarios de cierto producto
    let filtrado = [];
    comentarios.forEach((obj) => {
        obj.receta === idReceta ? filtrado.push(obj) : null;
    });
    if (filtrado.length === 0) {
        let divcomentario = document.getElementById("comentarios");
        let h2 = document.createElement("h2");
        h2.innerHTML = "La receta no contiene comentarios";
        divcomentario.appendChild(h2);
    } else {
        filtrado.forEach((element) => {
            let divcomentario = document.getElementById("comentarios");
            let divCard = document.createElement("div");
            divCard.className = "card";
            let h5Header = document.createElement("h5");
            h5Header.className = "card-header";
            h5Header.innerHTML = `El ${element.usuario}, comento el ${element.fecha}`;
            let divCardBody = document.createElement("div");
            divCardBody.className = "card-body";
            let h5Body = document.createElement("h5");
            h5Body.className = "card-title";
            h5Body.innerHTML = "Comentario";
            let p = document.createElement("p");
            p.className = "card-text";
            p.innerHTML = element.comentario;

            divCardBody.appendChild(h5Body);
            divCardBody.appendChild(p);

            if (usuarioLog) {
                if (usuarioLog.usuario === element.usuario) {
                    let boton = document.createElement("button");
                    boton.className = "btn btn-danger comentar";
                    boton.innerHTML = "Eliminar";
                    boton.onclick = function () {
                        eliminar(element.comentario);
                    };
                    divCardBody.appendChild(boton);
                }
            }

            divCard.appendChild(h5Header);
            divCard.appendChild(divCardBody);

            divcomentario.appendChild(divCard);
        });
    }
    if (usuarioLog) {
        let divboton = document.getElementById("boton");
        let boton = document.createElement("button");
        boton.className = "btn btn-primary comentar";
        boton.innerHTML = "Comentar";
        boton.onclick = function () {
            comentarReceta(idReceta, nombreReceta);
        };
        divboton.appendChild(boton);
    }
}

function eliminar(comentario) {
    let nuevocomentarios = [];
    let id = 1;
    comentarios.forEach((element) => {
        if (element.comentario != comentario) {
            element.id = id++;
            nuevocomentarios.push(element);
        }
    });
    localStorage.removeItem("comentarios");
    localStorage.setItem("comentarios", JSON.stringify(nuevocomentarios));
    JSON.parse(localStorage.comentarios).forEach((element) => {
        comentarios.push(element);
    });
    if (window.location.href.includes("producto")) {
        comentarios.forEach((obj) => {
            obj.producto === idProducto ? filtrado.push(obj) : null;
        });
        window.location.href = "./producto.html";
    }
    if (window.location.href.includes("receta")) {
        comentarios.forEach((obj) => {
            obj.receta === idReceta ? filtrado.push(obj) : null;
        });
        window.location.href = "./receta.html";
    }
}
