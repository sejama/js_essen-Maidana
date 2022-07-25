let usuarioLog;
let comentarios = [];

if(sessionStorage.usuario){usuarioLog = JSON.parse(sessionStorage.usuario);}

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
            img.setAttribute("alt", element.nombre);
            img.className = `class = "card-img-top"`;
            let divHija = document.createElement("div");
            divHija.className = "card-body";
            let h2 = document.createElement("h2");
            h2.style.textAlign="center";
            h2.innerText = element.nombre;
            div.appendChild(h2);
            let p1 = document.createElement("p");
            p1.className = "card-text";
            p1.innerText = element.descripcion;
            
            divHija.appendChild(p1);
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
            recetas.appendChild(div);
        })
    )//creamos las tarjetas de los recetas
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

    function vercomentario(id){  
        if(localStorage.receta){ 
            localStorage.removeItem("receta");
            localStorage.setItem("receta", id);
        }else{
            localStorage.setItem("receta", id);
        }
        window.location.href="./receta.html";
    }
    
    if(localStorage.comentarios){
        JSON.parse(localStorage.comentarios).forEach(element => {
            comentarios.push(element)})
    }else{
        fetch('../json/comentarios.json')
        .then(response => response.json())  // convertir a json
        .then(json => localStorage.setItem ("comentarios",JSON.stringify(json)))//cargamos los datos al localstorage
        .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
    
        JSON.parse(localStorage.comentarios).forEach(element => {
            comentarios.push(element)})
    }

    function comentar(id, nombre){
        if(localStorage.receta){ 
            localStorage.removeItem("receta");
            localStorage.setItem("receta", id);
        }else{
            localStorage.setItem("receta", id);
        }
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
            const hoy = new Date();
            let agregar =
                {
                "id": comentarios.length+1,
                "producto": "", 
                "receta":  id, 
                "usuario": usuarioLog.usuario, 
                "comentario": resultado.value,
                "fecha": `${hoy.getFullYear()}-${rellenarCero(hoy.getMonth()+1,2)}-${rellenarCero(hoy.getDate(),2)}` //"2022-04-18" 
                }
                comentarios.push(agregar)
                localStorage.removeItem("comentarios");
                localStorage.setItem("comentarios", JSON.stringify(comentarios));
            }
        })
        .then(() => {
            window.location.href="./receta.html";
        });
        return id;
    }

    function rellenarCero(number, cantidad) {
        var numero = Math.abs(number); /* Valor absoluto del número */
        var longitud = number.toString().length; /* Largo del número */ 
        var cero = "0"; /* String de cero */  
        
        if (cantidad <= longitud) {
            if (number < 0) {
                 return ("-" + numero.toString()); 
            } else {
                 return numero.toString(); 
            }
        } else {
            if (number < 0) {
                return ("-" + (cero.repeat(cantidad - longitud)) + numero.toString()); 
            } else {
                return ((cero.repeat(cantidad - longitud)) + numero.toString()); 
            }
        }
    }