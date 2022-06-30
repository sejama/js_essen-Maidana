const usuarios = [
    {
    apellido: "apellido1",
    contrasena: "12345",
    correo: "correo1@correo.com",
    fechaNacimiento: "1990-01-01",
    nombre: "nombre1",
    usuario: "usuario1",
    }
];
//ALMACENAR OBJETOS EN STORAGE
//Entonces, al buscar almacenar un objeto sin una transformación previa, guardamos [object Object],la conversión por defecto de objeto a string. Para guardar la información correctamente hay que transformar el objeto a JSON.
const  producto1  ={ id : 2, producto : "Arroz "};
localStorage .setItem ("producto1 ", producto1 );

//STRINGIFY
//Con JSON.stringify podemos transformarun objeto JavaScript aun string en formato JSON.
const  producto1  ={ id : 2, producto : "Arroz "};
const  enJSON   = JSON.stringify (producto1 );
console .log(enJSON ); // {"id":2,"producto":"Arroz"}
console .log(typeof  producto1 ); // object
console .log(typeof  enJSON );  // string
localStorage .setItem ("producto1 ", enJSON );
// Se guarda {"id":2,"producto":"Arroz"}

//PARSE
//Con JSON.parse podemos transformar string en formato JSON aobjeto JavaScript.
const  enJSON   = '{"id":2,"producto":"Arroz"} ';
const  producto1  = JSON.parse (enJSON );
console .log(typeof  enJSON );  // string
console .log(typeof  producto1 );  // object
console .log(producto1 .producto);  // Arroz
const  producto2  = JSON.parse (localStorage .getItem ("producto1 "));
console .log(producto2 .id);  // 2   

//EJEMPLO APLICADO: ALMACENAR ARRAY DE OBJETOS
const  productos  =[{ id : 1, producto : "Arroz ", precio : 125},
{ id : 2, producto : "Fideo ", precio : 70},
{ id : 3, producto : "Pan", precio : 50},
{ id : 4, producto : "Flan", precio : 100}];
const  guardarLocal  =(clave, valor) =>{ localStorage .setItem (clave, valor) };
//Almacenar producto por producto
for(const  producto  of productos ) {
guardarLocal (producto .id,  JSON.stringify (producto ));
}
// o almacenar array completo
guardarLocal ("listaProductos ", JSON.stringify (productos ));

//EJEMPLO APLICADO: OBTENER ARRAY ALMACENADO
class Producto{
    constructor(obj) {
        this.nombre  = obj.producto.toUpperCase();
        this.precio  = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
    //Obtenemos el listado de productos almacenado
    const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
    const productos =[];
    //Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
    for(const objeto of almacenados)
    productos.push(new Producto(objeto));
    //Ahora tenemos objetos productos y podemos usar sus métodos
    for(const producto of productos)
    producto.sumaIva();