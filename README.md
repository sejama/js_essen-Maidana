El README es el archivo en el cual hacemos la descripción del proyecto, ya sea open source o privados es importante tener un buen README. Este archivo se escribe con formato markdown, esto es lo primero que veremos en esta clase.

Markdown
Es un formato de escritura que permite la generación de contenido fácil y rápido, permite generar una salida (por lo general) en formato HTML sin necesidad de aprender a profundidad HTML. Es ampliamente utilizado por su facilidad de generar texto enriquecido.

Encabezados:
Lo utilizamos para resaltar una parte importante, títulos, subtítulos, etc. Se utiliza el símbolo # para demarcar el inicio de un encabezado.
# Encabezado nivel 1
## Encabezado nivel 2
### Encabezado nivel 3
#### Encabezado nivel 4
##### Encabezado nivel 5
###### Encabezado nivel 6

En HTML tendríamos la siguiente salida
<h1> Encabezado nivel 1 </h1>
<h2> Encabezado nivel 2 </h2>
<h3> Encabezado nivel 3 </h3>
<h4> Encabezado nivel 4 </h4>
<h5> Encabezado nivel 5 </h5>
<h6> Encabezado nivel 6 </h6>

Párrafos:
En formato Markdown escribirlos no es tan distinto a escribir en un texto plano, automáticamente se reconoce que es un párrafo, por ejemplo:
JavaScript es un lenguaje muy poderoso.

En la Escuela de JavaScript de Platzi aprenderás todo lo necesario para ir
de cero a rockstar.

En HTML sería:
<p>JavaScript es un lenguaje muy poderoso.</p>
<p>En la Escuela de JavaScript de Platzi aprenderás todo lo necesario para pasar de cero a rockstar.</p>

Itálicas y negritas
Hay partes en las que necesitaremos hacer énfasis en ciertas palabras, lo común es que utilicemos itálicas y negritas para resaltarlas, en Markdown debemos hacer lo siguiente:
**Esto es una negrita**
*Esto es una itálica*
**_Esto es una negrita con itálica_**

En HTML sería:
<strong>Esto es una negrita</strong>
<em>Esto es una itálica</em>
<strong><em>Esto es una negrita con itálica</em></strong>

Citas
Se utilizan para mostrar referencias a otros autores, en markdown hacemos:
> Esto es una cita

Podemos poner citas con varios párrafos

> Este es el primer párrafo
>
> Este es el último párrafo

Podemos citar dentro de citas

Esta es la cita principal

Esta es la cita secundaria

Podemos anidar elementos que vimos más arriba:

Este es el título de la cita
Cita de la cita

Listas
Podemos utilizar listas ordenadas y listas sin orden:

Listas ordenadas
Primer item
Segundo item
Tercer item
Listas sin orden
Item
Item
Item
Código
Es esencial que en los README podamos escribir código, esto para especificar la instalación o partes que debemos resaltar de nuestro proyecto. Hay dos formas en las que podemos resaltar código, dentro de un párrafo o en una sección completa, tal cual estamos haciendo en esta clase.
Esto es un pedazo de código dentro de un párrafo console.log('Hola Mundo')

Para insertar código lo que hacemos es dejar una tabulación y automáticamente lo reconocerá como código si no podemos utilizar `` para crear el bloque, así:

var name = 'Escuela de Javascript'

console.log(name)orque corderhouse igual nos prometió las clases completas