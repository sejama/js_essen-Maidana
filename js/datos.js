if (window.location.href.includes("ingresar.html")) {
    fetch('../json/usuarios.json') // Exito
        .then(response => response.json())  // convertir a json
        .then(json => //Cargamos los usuarios para poder ingresar o conprobar que si no existe para crear
            !localStorage.usuarios ? localStorage.setItem("usuarios", JSON.stringify(json)) : null)
        .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

    fetch('../json/comentarios.json')
        .then(response => response.json())  // convertir a json
        .then(json => //cargamos los datos al localstorage
            !localStorage.comentarios ? localStorage.setItem("comentarios", JSON.stringify(json)) : null)
        .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
}else{
    fetch('./json/usuarios.json') // Exito
        .then(response => response.json())  // convertir a json
        .then(json => //Cargamos los usuarios para poder ingresar o conprobar que si no existe para crear
            !localStorage.usuarios ? localStorage.setItem("usuarios", JSON.stringify(json)) : null)
        .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

    fetch('./json/comentarios.json')
        .then(response => response.json())  // convertir a json
        .then(json => //cargamos los datos al localstorage
            !localStorage.comentarios ? localStorage.setItem("comentarios", JSON.stringify(json)) : null)
        .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
}