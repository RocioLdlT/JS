# Desarrollo y reutilización de componentes de JS.

- Next: Framework React
- React: se considera a sí mismo una librería.
- Vanilla JS: base de JS, no librería ni framework.

Browser, Render, JavaScrip, son tres procesos que se encuentran en la base de JS.
(Ver referencias de Browser)

En JS existen dos procesos que se producen de manera automática en los `browser`: el _parsing_ (análisis sintáctico, por ejemplo los elementos pintables deben estar en el `body` y el browser es consciente de ello por lo que lo pondrá aunque nosotros no lo hayamos añadido. La diferencia es que el cierre de alguna etiqueta como un `h1` puede ponerla en alguna parte donde no era nuestra intención terminarla, pero nuestro .html siempre será funcional) y la creación del _árbol del DOM_ que se encuentra dentro de nuestro ordenador.

Tras esto, se le aplican las reglas de estilo de CSS (tenemos nuestros lapices pero aún no los hemos usado).
Después se crea un árbol de renderizado. En este punto estamos visualizando y creando nuestro "encuadre del" y definimos dónde va cada elemento, atributo, etc. Es nuestro Render/Layout. Y por último se encuentra la presentación del contenido mediante "Paint".

## Motores

- Motor de renderizado (encargado de todo lo anterior)
- Motor de navegación (quien coordina)
- Motor o interprete de código de JS (Ejecuta de la página web. Hay diferentes, cada navegador tiene el suyo V8 (Chrome, NodeJS), SpiderMonkey (Firefox), Chakr (Edge), etc.)

## API:

Estas son todas aquellas cosas más allá de core (el núcleo) que no son el motor de JS del navegador. Ayudan a comunicarnos junto con el motor del navegador (APIs en el browser y librerías de Node en el caso de Node al ser nuestro servidor propio).

Hay que tener en cuenta que en mi servidor puedo añadir terceras librerías, las que quiera. Pero en los browser, antiguamente existían plugin que se hicieron tan importantes y necesarios que fueron absorbidos por los propios motores de JS.

## Datos

1. ECMA-262 - ECMAScript Language specification, es lo que debe incluir el motor de JS, es el estandar de JS que incluye

2. Transpilar: convertir un lenguaje de alto nivel en otro de alto nivel;
   compilar: pasar de un lenguaje de alto nivel a otro de bajo nivel. ¿?

3. Fetch: Nació como API pero luego se añadieron a las librerías de los servidores, como en NODE.

4. Timers: Son APIs del navegador pero igualmente los añadieron a los servidores.
