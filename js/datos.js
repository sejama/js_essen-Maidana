fetch('../json/usuarios.json')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => 
        !localStorage.usuarios ? localStorage.setItem ("usuarios",JSON.stringify(json)) : null
        )
    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores