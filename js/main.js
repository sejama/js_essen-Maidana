let comentarios = [];
let cantidad = suma = puntuacion = 0;
let usuarios = [];
let usuarioLog = "";
const producotos = [];
const recetas = [];

class Prodcto{
    constructor(id, nombre, categoria, precio){
        this.id = id;
        this.nomre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}

class Receta{
    constructor(id, titulo, descripcion){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}

class Comentario{
    constructor(prodcuto, receta, usuario, comentario, fecha){
        this.prodcuto = prodcuto;
        this.receta = receta;
        this.usuario = usuario;
        this.comentario = comentario;
        this.fecha = fecha;
    }
}

class Calificar{
    constructor(prodcuto, receta, usuario, puntos, fecha){
        this.prodcuto = prodcuto;
        this.receta = receta;
        this.usuario = usuario;
        this.puntos = puntos;
        this.fecha = fecha;
    }
}

class Usuario{
    constructor(nombre, apellido, usuario, fechaNacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.fechaNacimiento = fechaNacimiento;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    setApellido(apellido){
        this.apellido = apellido;
    }
    setUsuario(usuario){
        this.usuario = usuario;
    }
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getUsuario(){
        return this.usuario;
    }
    getDia(){
        return this.fechaNacimiento.getDay();
    }
    getMes(){
        return this.fechaNacimiento.getMonth() + 1  ;
    }
    getYear(){
        return this.fechaNacimiento.getFullYear();
    }
}

const logout = () => {
    alert("Gracias por tu visita " + usuarioLog + ", ojala vuelvas pronto.");
    usuarioLog = "";
}

const comentario = (usuario, texto) => {
    comentarios.push("El usuario: " + usuario + ", comento " + texto);
    let mostrar = "";
    for (const com of comentarios) {
        mostrar = mostrar + com + "\n";
    }
    alert(mostrar);
}

const calificacion = (punto) => {
    cantidad++;
    suma = suma + punto;
    puntuacion = (suma/cantidad);
    alert(puntuacion);
}

const login = () => {
    if(usuarios.length == 0) {
        alert("No existen usaurios registrados, por favor registrese!");
        return;
    }
    let us = prompt("Por favor ingrese su usuario para iniciar");
    let encontro = usuarios.some((el)=> el.usuario === us);
    while(!encontro){
        alert("El usuario no existe!");
        us = prompt("Por favor ingrese su usuario para iniciar");
        encontro = usuarios.some((el)=> el.usuario === us)
    }
    usuarioLog = us;
    let op = parseInt(prompt("Bienvenido " + usuarioLog +"\nElija una opcion\n 1- Cerrar Sesión\n 2- Comentar\n 3- Calificar\nCualquier tecla para salir."));
    while(op >=1 && op <= 3){
        switch (op) {
            case 1:
                logout();
                op = 4;
                break;
            case 2:
                comentario(usuarioLog,prompt("Ingrese su comentario"));
                op = parseInt(prompt("Bienvenido " + usuarioLog +"\nElija una opcion\n 1- Cerrar Sesión\n 2- Comentar\n 3- Calificar"));
                break;
            case 3:
                let p = parseInt(prompt("Ingrese su puntuacion"));
                while(isNaN(p)){
                    p = parseInt(prompt("Ingrese su puntuacion"));
                }
                calificacion(p);
                op = parseInt(prompt("Bienvenido " + usuarioLog +"\nElija una opcion\n 1- Cerrar Sesión\n 2- Comentar\n 3- Calificar"));
                break;
        }
    }
}

const registrar = () => {
    let nombre = prompt("Por favor ingrese su nombre: ");
    while(nombre == "" || nombre == " "){nombre = prompt("Por favor ingrese su nombre: ");}
    let apellido = prompt("Por favor ingrese su apellido: ");
    while(apellido == "" || apellido == " "){apellido = prompt("Por favor ingrese su apellido");}    
    let usuario = prompt("Por favor ingrese su usuario: ");
    while(usuario == "" || usuario == " "){usuario = prompt("Por favor ingrese su usuario: ");}
    let fechaDia = parseInt(prompt("Por favor ingrese su día de nacimimiento: "));
    let fechaMes = parseInt(prompt("Por favor ingrese su mes de nacimimiento: "));
    let fechaYear = parseInt(prompt("Por favor ingrese su año de nacimimiento: "));
    
    let nacimiento = new Date(fechaYear,fechaMes-1,fechaDia)
        
    if(usuarios.length == 0){ 
        const user = new Usuario(nombre, apellido, usuario, nacimiento);
        usuarios.push(user);
    }else{
        for (let index = 0; index < usuarios.length; index++) {
            while(usuarios[index].getNombre() === nombre && usuarios[index].getApellido() === apellido){
                alert("Nombre y apellido ya existente, por favor ingrese su nombre y apellido correcto");
                nombre = prompt("Por favor ingrese su nombre: ");
                apellido = prompt("Por favor ingrese su apallido: ");
            }
            while(usuarios[index].getUsuario() === usuario) {
                alert("Usuario existente!");
                usuario = prompt("Por favor ingrese su usuario: ");
            }
        }    
        const user = new Usuario(nombre, apellido, usuario, nacimiento);
        usuarios.push(user); 
    }
    console.log(usuarios);   
}

let op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Registrar \n 3- Ver Productos \n 4- Ver Recetas\nCualquier otra tecla para salir."));
while(op >=1 && op <= 4){
    switch (op) {
        case 1:
            login();
            op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Registrar \n 3- Ver Productos \n 4- Ver Recetas\nCualquier otra tecla para salir."));
            break;
        case 2:
            registrar();
            op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Registrar \n 3- Ver Productos \n 4- Ver Recetas\nCualquier otra tecla para salir."));
            break;
        case 3:
            alert("Producto 1\nProducto 2\nProducto 3\nProducto 4\nProducto 5");
            op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Registrar \n 3- Ver Productos \n 4- Ver Recetas\nCualquier otra tecla para salir."));
            break;
        case 4:
            alert("Receta 1\nReceta 2\nReceta 3\nReceta 4\nReceta 5");
            op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Registrar \n 3- Ver Productos \n 4- Ver Recetas\nCualquier otra tecla para salir."));
            break;
        default:
            op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Registrar \n 3- Ver Productos \n 4- Ver Recetas\nCualquier otra tecla para salir."));
            break;
    }
}