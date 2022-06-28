let usuarios = [];

class Usuario{
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

let formulario = document.getElementById("formulario-registrar");
formulario. addEventListener ("submit", registrar);
function registrar(e){
    e.preventDefault();
    let formulario = e.target
    let nombre = formulario.children[0].children['inputNombre'].value;
    let apellido = formulario.children[1].children['inputApellido'].value;
    let correo = formulario.children[2].children['inputCorreo'].value
    let fecha = formulario.children[3].children['inputFechanacimiento'].value
    let user = formulario.children[4].children['inputUsuario'].value
    let pass = formulario.children[5].children['inputContrasena'].value

    usuario  = new Usuario(nombre, apellido, user, pass, correo, fecha);
    usuarios.push(usuario);
}
