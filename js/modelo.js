export class Usuario{
    constructor(nombre, apellido, usuario, contrasena, correo, fechaNacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.correo = correo;
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

class Producto{
    constructor(id, nombre, descripcion, categoria, precio){
        this.id = id;
        this.nomre = nombre;
        this.descripcion = descripcion;
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


