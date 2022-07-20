let comentarios = [];

JSON.parse(localStorage.comentarios).forEach(element => {
    comentarios.push(element)})

let idProducto = comentarios[comentarios.length - 1].producto;
console.log(idProducto);
fetch('../json/productos.json')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => 
        json.find((el) => el.id  ===  idProducto))
    .then(producto =>{
        let productos = document.getElementById("comentarios")
        let h1 = document.createElement("h1");
        h1.innerHTML =  "Sesión de los comentaiors del producto: " + producto.nombre;
        productos.appendChild(h1);
    })



