# Desarrollo y reutilización de componentes de JS

- Next: Framework React
- React: se considera a sí mismo una librería.
- Vanilla JS: base de JS, no librería ni framework.

Browser, Render, JavaScrip, son tres procesos que se encuentran en la base de JS.
(Ver referencias de Browser)

En JS existen dos procesos que se producen de manera automática en los browser: el _parsing_, encargado del análisis sintáctico, por ejemplo los elementos pintables deben estar en el `body` y el browser es consciente de ello por lo que lo especificará igualmente en nuestro esquema aunque nosotros no lo hayamos añadido (el problema de esto es que en el cierre de alguna etiqueta como un `h1` puede ponerla en alguna parte donde no era nuestra intención terminarla, pero nuestro .html siempre será funcional); y la creación del _árbol del DOM_ que se encuentra dentro de nuestro ordenador.

Tras esto, se le aplican las _reglas de estilo de CSS_ (tenemos nuestros lápices pero aún no los hemos usado).
Después se crea un _árbol de renderizado_. En este punto estamos visualizando y creando el "encuadre de nuestro dibujo, relato o catedral" y definimos dónde va cada elemento, atributo, etc. Es nuestro Render/Layout. Y por último se encuentra la presentación del contenido mediante _Paint_.

## Motores

- Motor de renderizado (encargado de todo lo anterior) procesa HTML y CSS para construir y mostrar la página en pantalla.
- Motor de navegación quien coordina el funcionamiento general del navegador (peticiones HTTP, gestión del historial, interacción con el sistema, etc.)
- Motor o interprete de código de JS ejecuta el código JavaScript de la página web. Cada navegador tiene el suyo propio, por ejemplo:V8 (Chrome y Node.js), SpiderMonkey (Firefox), Chakra (antiguo Edge).

## API:

Application Programming Interface: Estas son todas aquellas cosas más allá de core (el núcleo) que no son el motor de JS del navegador. Ayudan a comunicarnos junto con el motor del navegador (APIs en el browser y librerías de Node en el caso de Node al ser nuestro servidor propio).

Datete 🙂 : Hay que tener en cuenta que en mi servidor puedo añadir terceras librerías, las que quiera. Pero en los browser, antiguamente existían plugin que se hicieron tan importantes y necesarios que fueron absorbidos por los propios motores de JS.

## Definiciones

- Function: Conjunto de instrucciones al que le pasamos parámetros para que se ejecute y nos devuelva un resultado.
  Las funciones `void` no devuelven ningún valor (por ejemplo, console.log, que no retorna nada pero muestra o pinta en pantalla lo que le indicamos) y funciones que sí devuelven un resultado tras realizar una operación.

- Objeto: estructura que tiene propiedades con valores y a su vez esas propiedades tienen otros objetos, propiedades que pueden contener otras propiedades, propiedades que también pueden tener arrays. Ej:

```hmtl
const user = {
    name: `Pepe`
    address: {
        street: ``
    friends: {}

}
console.log(user)
```

## DOM

El DOM es con quien podemos modular el motor de un browser de JS.
Es un objeto vivo, es decir, que puedo reescribir código y atributos en él.
Todos los elementos del DOM tienen eventos.

- Accedemos al DOM con document. (window.document) que es una variable global.
- Con este document.log(document). Con este podemos ver el objeto entero
- console.dir(document) sirve para decirle al DOM que no me haga transformaciones a mi document.
- childNodes, serás las cabezas principales, los "nodos".
  DATO: los espacios, saltos de línea en mi html los cuenta como otro nodo, por cierto.

```html
<!DOCTYPE >
<html></html>
```

Mi DOM tendrá 2 childNodes

```html
<!DOCTYPE >
<html>
    <head> </head>
    <body></body>
</html>
```

Mi html tiene 2 childNodes

```html
<!DOCTYPE >
<html>
    <head> </head>
    <body>
        <header></header>
        <main></main>
        <footer></footer>
    </body>
</html>
```

Mi body tiene 3 childNodes, pero para acceder dentro de ellos, éstos serán sus children: `console.log(document.body.children)`; console.log (document.body.) ¿children o ?

Accesos directos al DOM (antiguos, no los vamos a usar, ya que hay dos apis más modernos)
`document.getElementById()` ;
`document.getElementByClassName()`;
`document.getElementByTagName()`;
`document.getElementByNAme()`

Los modernos, `querySelection`, que los tienen todos los elementos del DOM. (Datos, estos nos devuelve nodeList)
document.querySelector(`#home`) Nos devuelve un id.
document.querySelector(`.home`) Nos devuelve el primer elemento que encuentre con esta clase, (el primero de 25, por ejemplo).
document.querySelector(`[aria-label="home"]`) Nos devuelve el primer ATRIBUTO que encuentre de aria-label igualado home¿?, (el primero de 25, tb).
document.querySelector("main>section::nth-of-type(1)")
document.querySelectorAll()
home.querySelectorAll(`p`) Estoy pidiéndole que me devuelva todos los <p> que contenga home. Y después pueda modificarlo si es lo que estoy buscando.

```html
const = home.querySelector(`p`) const hoy = new Date() p.textContent =
`Aprendiendo a manipular el DOM` + hoy
```

También podemos crear nuevo elementos desde el DOM:
const newP = document.createElement(`p`)
newP.textContent = "Hola Amigos"
console.log(newP) <!-- en bonito -->
console.dir(newP) <!-- no bonito  -->

También podemos crearlo desde una `section` como es home (ya creada en nuestro html)
home.appendChild(newP) <!-- propiedad que crea un hijo -->

Otro modo de de crear elementos es:

```html
home.innerHTML +=
<ul>
    <li>Horror</li>
    <li>Horror 2</li>
</ul>
```

Por ejemplo quiero coger un botón de mi html que tiene un `id="theme-toggle"`:
const buttonElement(nombrepatata) = document.querySelector(#`theme-toggle`)
console.dir(buttonElement)

## EVENTOS

Los eventos: haces una function, se escucha y se ejecuta y sucede lo instruccionado ¿?
(Poner ejemplo button)

1. .querySelector
   Consulta a algo seleccionado del DOM con document.querySelector

2. .querySelectorAll
   Consulta a algo seleccionado del DOM con document.querySelectorAll, pero todos los asociados a ese selector. Por ejemplo si te estas refiriendo a todos los párrafos de tu html.

3. handle(nombre: CLick, Link, Button, etc.)
   Manejadores. Maneja un evento, después de escuchar a .addEventListener.

4. .preventDEfault
   Corta el comportamiento por defecto a un evento. Por ejemplo a un enlace "a" no lo dejaría navegar, ya que por defecto, este

5. .addEventListener
   Escucha

6. .stopPropagation
   Permite que no se propague la navegación.

7. .pushState
   Empuja el estado a lo siguiente.

8. history..pushState
   Permite coger un path y llevarlo arriba, en la ruta del navegador.

9. .popState
   Devuelve el estado a lo anterior, retrocede (por ejemplo volver a la pagina anterior)

10.

## Singlepage o multipage.

1. SINGLEPAGE: Suelen contener más navegación de scroll. Con enlaces relativos para movernos entre menus, aunque podamos esconderlos a través de hidden para darles una apariencia en la que parezca que navegamos entre páginas. Pueden contener enlaces absolutos que nos redirijan fuera de nuestra SPA.
2. MULTIPAGE: Contienen más de una página, aunque también puede incluir el scroll de una SPA. Suelen contener enlaces absolutos,

## LIVE SERVER

## Formularios

Ejemplo en 4_web_spa/index.html

Controles del formularios, inputs, checkbox,..., select-options
Todo ellos van guardados en una etiqueta `form`.
Dentro de ella podemos añadir los inputs pero hay que tener en cuenta que hay dos maneras de envolver la etiqueta input con la etiqueta label, la primera a través de ` label for="n1"` asociándolo a un id del `input id n1` (si el input esta fuera del label). La segunda manera es meter al input dentro de la etiqueta label.

En nuestro css podremos darle forma a los label (creando la clase .label) con display flex o display grid, por ejemplo.

Básicamente los input son de tipo texto `type ="text"`.
También están los `type="tel"` para teléfonos; `type="number"` para números;`type="password"` para contraseñas;`type="date"` para fechas;`type="file"` para seleccionar archivos;`type="email"` para email;`type="radio"` para radio-buttons ; `type="checkbox"` para elegir opciones sin discriminar uno de otra opción, en principio, si no lo ;

- label con la etiqueta fieldset para añadir "cuadrados" con leyend (leyend es la pregunta o lo que sea que escribas a nivel del cuadrado añadido), siendo fieldset y leyend elementos pasivos;
- label con la etiqueta select dentro y a su vez diferentes etiquetas de option añadidas a este select.
- label con la etiqueta button dentro, creando un botón.
- label con la etiqueta textarea dentro, creando una zona para añadir más texto, comentarios (podremos delimitarla)

Los inputs tendrán requisitos de validaciones. Los más importantes son:

- `input required` :que es necesario sí o sí.
- `input pattern=""` : que requiere de cierto patrón, como con los teléfonos o las fechas
- ...buscar

Al formulario podremos asociarlo a un method, que puedes se "post" o "get". La diferencia de usar un método de otro es que con "post" será la carta que enviamos por correo y "get" será nuestra postal. Hay que tener en cuenta que nuestra carta además si es https, si alguien que no debe leerla la intenta abrir estará encriptada.

Tienen una propiedad especial que es "elements"..._continuará.._

## COMPONENTES

Son piezas de código independientes, reutilizables y encapsuladas (formadas por la triada HTML, CSS y JS) que representan una parte de la interfaz de usuario (UI), como un botón, un menú de navegación o una tarjeta de producto. Sirven para simplificar el desarrollo, centralizar la lógica y facilitar el mantenimiento de aplicaciones web compleja.

1. Creamos el componente:
    - function
    - llamo selector (creo app-sample; app- porque por validación y lo que es estándar  )
Diferencias entre componentes y web components que utiliza clases(este último).

Uso de props en componentes*

## CRUD (Create, Read, Update, Delete)



## Datos

1. ECMA-262 - ECMAScript Language specification, es lo que debe incluir un motor de JS, es el estándar de JS que incluye el conjunto de reglas que define JS.

2. Transpilar: convertir un lenguaje de alto nivel en otro de alto nivel o equivalente. Transpilar, un subconjunto de la compilación, convierte código fuente de un lenguaje de alto nivel a otro lenguaje de alto nivel equivalente; compilar es el proceso de traducir código de alto nivel (humano) a código máquina (binario) ejecutable directamente por el ordenador.

3. Fetch: Nació como API pero luego se añadieron a las librerías de los servidores, como en NODE.

4. Timers: Son APIs del navegador pero igualmente los añadieron a los servidores.
5. ESM: significa ECMAScript Modules (módulos ECMAScript). Es el sistema estándar oficial para estructurar, organizar y reutilizar código JavaScript, permitiendo importar y exportar funcionalidades entre diferentes archivos usando import y export

6. Nombres: HTML y CSS nombres en minúscula con guión intermedio; inicio de minúscula seguido de la segunda palabra en mayúscula para JS;

7.

```js
function handleChange () {
    // console.log('Change')
// } es lo mismo que lo inmediatamente siguiente pero con function arrow:
const handleChange = () => {
        console.log('Change')
    }
// Las funciones arrow son las actualmente más novedosas para escribirlas de este modo
export function main() {
    console.log('Loaded main')
    const toggleElement = document.querySelector("#theme-toggle");
    toggleElement.addEventListener('change', handleChange)
}
```

8. Refactorizar: mejorar tu código. Tú hazlo maja, que funciones y luego ya retocas si ves que has dado mil vueltas 🙂🤯

### Dudas a buscar , revisar o entender.

1.  Qué es hacer defer un script, para qué sirve y porqué lo hacemos.
2.  Diferencias entre asignación de una función funciona y una asignación de una arrow function
3.  Buscar como diferenciar =>, ==, ===,
4.  Añadir en 1. dentro de JS/js functions.
5.  Mirar cuando se usan las "", '' o ``.
6.  buscar exactamente preventDefault
7.  Handle, son manejadores por lo que los llamo así seguidos de a loq eu queremos manejar handleMenu, handleDialog, handleDialogMene...
