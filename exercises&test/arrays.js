// En los arrays y los objetos se usan []
// Los arrays son objetos que tienen propiedades indexadas y también puede tener tener excentricidad.
// Todo lo que se puede hacer con un objeto técnicamente se puede hacer con un array.
// Un array puede contener objetos y viceversa
// Un array es un objeto donde los objetos valen ..
// Un array puede contener objetos y viceversa.

const user = ["Pepe", 22, "Developer"];
console.log(user);
console.log(user[0]);

// Excentricidad
user.id = 1;
console.log(user);

// Recordatorio: bucle for para recorrer las posiciones de un array [0,1,2]

const userContacts = ["Luis", "Ramón", "Rosa"];

for (let i = 0; i < userContacts.length; i++) {
    // el i++ significa que sume en la siguiente vuelta, y la propiedad length
    const item = userContacts[i];
    console.log(item);
}
// Bucle for-in: es similar al bucle for pero tengo una key que tb podría llamarse i, por ejemplo, es un bucle for acoplado al array. Es ideal para objetos

for (const key in userContacts) {
    const item = userContacts[key];
    console.log(item);
}

// Bucle for-of: es una manera de decir
for (const item of userContacts) {
    console.log(item);
}

//  1. Propiedades de los Arrays

// Propiedades mutables: modifican el array original
// userContacts. ; nos da una posible propiedad que nos han incluido para los arrays, y que son muy útiles y por lo que nos ahorramos usar los bucles anteriores en arrays.
userContacts.push("Ernesta"); // Me pone un item o elemento al final del array
userContacts.pop(); // Me quita el ultimo
userContacts.sort(); // Los ordena con una ordenación por defecto
userContacts.unshift("Micaela");
userContacts.shift();
userContacts.reverse(); // Te devuelve el array en el orden revertido.

// Propiedades inmutables: no modifican el array original
const constArray = userContacts.concat(["Felipe"]);
newArray = userContacts.toSorted();
newArray = userContacts.toReversed();
console.log(userContacts);
console.log(newArray);

// 2. Acceder a fragmentos del array (buscar)
// Mutables
userContacts.splice();

//Inmutables
userContacts.slice();
userContacts.toSpliced();

// 3. HOF: Es una función que itera el array, lo recorre, da vueltas, empieza por el inicial y termina en el ultimo
// y en cada iteración, .forEach ejecuta el item  y ademas tantas veces como iteraciones haya. .forEach es un callback.
// No devuelve nada solo recorre los parámetros , un string, números o arrays que le has indicado pero no modifica el array original.
userContacts.forEach((item) => console.log(item)); // Es un arroy simplificada
// userContacts.forEach( (item) => {
//      console.log(item))
//}

// DATO: Las arrow si solo tienen tienen un solo ARGUMENTO al simplificarlas no necesitan paréntesis, si ya es mas de un argumento sí los necesita.

// Ejemplo de .forEach con un array entro de un array

let total = 0;
[
    [1, 3, 6],
    [1, 6, 7],
].forEach((item) => item.forEach((item) => (total += item)));
console.log(total);

// Algunos métodos de las HOF (.map, .filter,...)

const numbers = [1, 2, 3, 6, 8];

const doubles = numbers.map((item) => item * 2);
//mapea o proyecta, en cada vuelta de la iteración recoge un valor y devuelve lo que le indicas a cada uno de esos elementos del array
// const doubles = numbers.map(item => {return item *2}), es lo mismo, es un atajo.
console.log(doubles);

const f = doubles.filter((item) => item > 10);
// .filter filtra. Si tenemos un array de 5 elementos como arriba  const numbers nos devolverá de uno a cinco elementos siempre que cumplan el filtrado.
// .filter siempre me devolverá un array pero dentro, su item me devuelve un booleano,; si cumple la condición lo pasará y sino no.
console.log(f);

const r = f.find((item) => item > 12);
// .find filtra con un callback tb como en .filter PERO devuelve el primero que encuentra sin array []. Si no encuentra o no hay ese elemento devuelve undefined.
console.log(r);

const i = f.findIndex((item) => item > 20);
// .findIndex encuentra la posición que ocupa un elemento dentro del array.
// En este caso si no encontrase la posición porque no existe, no nos devuelve undefined, sino -1. Por reglas de esta propiedad
console.log(i);

const n = f.reduce((prev, current) => prev + current);
//  .reduce es para reducir en array en un elemento, se suele usar mucho en números, le das un valorprevio y un currentvalor. Pasar un conjunto de valores para obtener uno solo.
console.log(n);
// Un ejemplo de .reduce con string es:
const s = userContacts.reduce((prev, current) => prev + ", " + current);
console.log(s);

const t = [
    [1, 3, 6],
    [1, 6, 7],
]
    .flat()
    .reduce((a, b) => a + b);
console.log(t);
// .flat te devuelve un array de una sola dimensión al aplastar todos los arrays que les estas dando. Solo aplana el primer nivel del array, no los 27 siguientes.
//  En este ejemplo tenemos 2 arrays dentro de otro por lo que nos lo devolverá como uno solo [1, 3, 6, 1, 6, 7]. Lo que pasa es que además tenemos un .reduce y por tanto nos lo devuelve reducido a un valor.

// La única de todas estas que no me devolvería nada es la de .forEach, ya que es una función void

// Ejemplos de realización de ejercicios de desmenuzar los métodos de los arrays con funciones y nuestras variables. Arrays dentro de 5.JS/1_js/exercises.
"Pepe es mi amigo".slice(4, 8); // Esto es el método
// function mySlice (s='', start, end) { // Esto podría ser la función que desarrolla el método sin usar las propiedades ni los métodos de los arrays.
// for ....
// }
// mySlice ('Lo que quieres', 4, 7)
