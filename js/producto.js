fetch('../json/productos.json')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => 
        json.forEach(element => {
            let productos = document.getElementById("prodcutos");
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
            //button type="button" class="btn btn-primary" onclick="showAlert()">Mostrar popup</button>
            let boton = document.createElement("button");
            boton.className = "btn btn-primary comentar"+element.id
            boton.innerHTML = "Comentar";
            divHija.appendChild(p1);
            divHija.appendChild(p2);
            divHija.appendChild(boton);
            div.appendChild(img);
            div.appendChild(divHija);
            productos.appendChild(div);
        })
    )//creamos las tarjetas de los productos
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
const comentar = document.getElementsByClassName("comentar");
console.log(comentar)


function alerta(){
    alerta("hizo clic");
}
