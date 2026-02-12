// Hay dos tipos: 

const t = setTimeout (()=> {
    console.log('Por fin')
}, 3_000);

// Devuelve un valor después del tiempo que le indiques

const i = setInterval (() => {
    console.log('Otra vez')
}, 1_000);

// 
// Estos también son callbacks.

setTimeout(() => {
    clearInterval(i)
}, 10_000)
