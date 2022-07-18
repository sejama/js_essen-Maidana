fetch('../json/recetas.json')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => 
        json.forEach(element => {
            let  recetas= document.getElementById("recetas");
            let div = document.createElement("div");
            div.className = "card card-" + element.id;
            div.style.width="18rem";
            let img = document.createElement("img");
            img.setAttribute("src", element.img);
            img.setAttribute("alt", element.titulo);
            img.className = `class = "card-img-top"`;
            let divHija = document.createElement("div");
            divHija.className = "card-body";
            let h2 = document.createElement("h2");
            h2.style.textAlign="center";
            h2.innerText = element.titulo;
            div.appendChild(h2);
            let p1 = document.createElement("p");
            p1.className = "card-text";
            p1.innerText = element.descripcion;
            divHija.appendChild(p1);
            div.appendChild(img);
            div.appendChild(divHija);
            recetas.appendChild(div);
        })
    
    )//creamos las tarjetas de los productos
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
