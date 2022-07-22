let usuarioLog;
let comentarios = [];

if(sessionStorage.usuario){usuarioLog = JSON.parse(sessionStorage.usuario);}
console.log(usuarioLog);
fetch('../json/productos.json')// Exito
    .then(response => response.json())  // convertir a json
    .then(json => 
        json.forEach(element => {
            let productos = document.getElementById("productos");
            let div = document.createElement("div");
            div.className = "card card-" + element.id;
            let h2 = document.createElement("h2");
            h2.style.textAlign="center";
            h2.innerText = element.nombre;
            div.appendChild(h2);
            let img = document.createElement("img");
            img.setAttribute("src", element.img);
            img.setAttribute("alt", element.nombre);
            img.className = `class = "card-img-top"`;
            let divHija = document.createElement("div");
            divHija.className = "card-body";
            let p1 = document.createElement("p");
            p1.className = "card-text";
            p1.innerText = element.descripcion;
            let p2 = document.createElement("p");
            p2.className = "card-text";
            p2.innerText = "$" + element.precio;
            divHija.appendChild(p1);
            divHija.appendChild(p2);
            if(usuarioLog){
                let boton = document.createElement("button");
                boton.className = "btn btn-primary comentar"
                boton.innerHTML = "Comentar";
                boton.onclick = function() {comentar(element.id, element.nombre)};
                divHija.appendChild(boton);
            }else{
                let boton = document.createElement("button");
                boton.className = "btn btn-primary comentar" + element.id
                boton.innerHTML = "Ver Comentarios";
                boton.onclick = function() {vercomentario(element.id)};
                divHija.appendChild(boton);
            }
            div.appendChild(img);
            div.appendChild(divHija);
            productos.appendChild(div);
        })
    )//creamos las tarjetas de los productos
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
    

    function vercomentario(id){   
        window.location.href="./producto.html";
    }
    JSON.parse(localStorage.comentarios).forEach(element => {
        comentarios.push(element)})
    function comentar(id, nombre){
        let comentario;
        Swal
        .fire({
            title: "Realizar comentario del "+ nombre + " - ID: " + id,
            input: "textarea",
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
            inputValidator: (comentario) => {
                // Si el valor es válido, debes regresar undefined. Si no, una cadena
                if (!comentario) {
                    return "Por favor escribe un comentario";
                } else {
                    return undefined;
                }
            }
        })
        .then(resultado => {
            if (resultado.value) {
                comentario = resultado.value;
                console.log("Hola, " + comentario + " " + id);
            let agregar =
                {
                "id": comentarios.length+1,
                "producto": id, 
                "receta":  "", 
                "usuario": usuarioLog.usuario, 
                "comentario": resultado.value,
                "fecha": "2022-04-18"
                }
                comentarios.push(agregar)
                localStorage.removeItem("comentarios");
                localStorage.setItem("comentarios", JSON.stringify(comentarios));
            }
        })
        .then(() => {
            window.location.href="./producto.html";
        });
        return id;
    }