# Desarrollo y reutilización de componentes de JS.

- Next: Framework React
- React: se considera a sí mismo una librería.
- Vanilla JS: base de JS, no librería ni framework.

Browser, Render, JavaScrip, son tres procesos que se encuentran en la base de JS.
(Ver referencias de Browser)

En JS existen dos procesos que se producen de manera automática en los `browser`: el _parsing_ (análisis sintáctico, por ejemplo los elementos pintables deben estar en el `body` y el browser es consciente de ello por lo que lo pondrá aunque nosotros no lo hayamos añadido. La diferencia es que el cierre de alguna etiqueta como un `h1` puede ponerla en alguna parte donde no era nuestra intención terminarla, pero nuestro .html siempre será funcional) y la creación del _árbol del DOM_ que se encuentra dentro de nuestro ordenador.

Tras esto, se le aplican las reglas de estilo de CSS (tenemos nuestros lapices pero aún no los hemos usado).
Después se crea un árbol de renderizado. En este punto estamos visualizando y creando nuestro "encuadre de nuestro dibujo, relato o catedral" y definimos dónde va cada elemento, atributo, etc. Es nuestro Render/Layout. Y por último se encuentra la presentación del contenido mediante "Paint".

## Motores

- Motor de renderizado (encargado de todo lo anterior)
- Motor de navegación (quien coordina)
- Motor o interprete de código de JS (Ejecuta de la página web. Hay diferentes, cada navegador tiene el suyo V8 (Chrome, NodeJS), SpiderMonkey (Firefox), Chakr (Edge), etc.)

## API:

Estas son todas aquellas cosas más allá de core (el núcleo) que no son el motor de JS del navegador. Ayudan a comunicarnos junto con el motor del navegador (APIs en el browser y librerías de Node en el caso de Node al ser nuestro servidor propio).

Hay que tener en cuenta que en mi servidor puedo añadir terceras librerías, las que quiera. Pero en los browser, antiguamente existían plugin que se hicieron tan importantes y necesarios que fueron absorbidos por los propios motores de JS.

## Definiciones

- Function: Conjunto de instrucciones a las que les pasamos parámetros para que se ejecutarla y nos responda argumentos.
  Las funciones boy no devuelven nada(console.log, no me devuelve nada pero pinta en pantalla lo que yo le mando) y las funciones que pintan o realizan algo.

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

Mi DOM tendrá 2 chilNodes

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
const = home.querySelector(`p`)
const hoy = new Date()
p.textContent = `Aprendiendo a manipular el DOM` + hoy
```

También podemos crear nuevo elementos desde el DOM:
const newP = document.createElement(`p`)
newP.textContent = "Hola Amigos"
console.log(newP) <!-- en bonito -->
console.dir(newP) <!-- no bonito  -->

También podemos crearlo desde una `section` como es home (ya creada en nuestro html)
home.appendChild(newP)  <!-- propiedad que crea un hijo -->

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

## Datos

1. ECMA-262 - ECMAScript Language specification, es lo que debe incluir un motor de JS, es el estándar de JS que incluye el conjunto de reglas que define JS.

2. Transpilar: convertir un lenguaje de alto nivel en otro de alto nivel o equivalente; compilar: pasar de un lenguaje de alto nivel a otro de bajo nivel. Compilar es el proceso de traducir código de alto nivel (humano) a código máquina (binario) ejecutable directamente por el ordenador. Transpilar, un subconjunto de la compilación, convierte código fuente de un lenguaje de alto nivel a otro lenguaje de alto nivel equivalente

3. Fetch: Nació como API pero luego se añadieron a las librerías de los servidores, como en NODE.

4. Timers: Son APIs del navegador pero igualmente los añadieron a los servidores.

5.
