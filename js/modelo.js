export class Usuario {
    constructor(nombre, apellido, usuario, contrasena, correo, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.correo = correo;
        this.fechaNacimiento = fechaNacimiento;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    setUsuario(usuario) {
        this.usuario = usuario;
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getUsuario() {
        return this.usuario;
    }
    getDia() {
        return this.fechaNacimiento.getDay();
    }
    getMes() {
        return this.fechaNacimiento.getMonth() + 1;
    }
    getYear() {
        return this.fechaNacimiento.getFullYear();
    }
}
