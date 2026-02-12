// Hight Order Function

// Recibe como parámetro una función o retorna una función

const calculate = function (fn, a=0, b=0) { // donde fn es una función que será add abajo
    console.log (typeof fn)  // Podemos usar typeof para ver qué me va a devolver
    const r = fn(a, b);
    console.log(r);
};

// Suponemos que tenemos la siguiente función
// function suma(a, b) {
    // return a + b;
// } sería lo mismo que lo siguiente 

const add = (x, y) => {
    return x * y;
}
console.log (add (2, 4))
console.log (add)
calculate (add, 3, 6)

// La función que le llega a mi función inicial se llaman callbacks: llamadas de vuelta; 
// es asíncrono porque necesita de alguien que la llame y ejecute. 
// Es diferente ejecutar la función que especificar la función.
// Las función callbacks también se llaman predicado.

// const prod = (x, y) => {
    // return x * y;
// }; Esto es lo mismo escrito que lo siguiente (abreviado) (deben tener ambos quitados "return" y {}):
const prod = (x, y) => x + y // Esto de denomina lamba
calculate (prod, 30, 60);
// Las funciones callbacks son principalmente usadas para ser llamadas/usadas por otras funciones, 
// por eso no se les suelen poner parámetros, 
// porque al añadirle parámetros nos la cargamos y ya no sería una función callbacks.
