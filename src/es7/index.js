let numbers = [1,2,3,4,5,6,7];

if (numbers.includes(7)){
    console.log('Si se encuentra el valor 7.');
} else{
    console.log('No se encuentra.');
}



let base = 4;

let exponent = 3;

let result = base ** exponent;

console.log(result);



const data = {
    frontend: 'whosdavidc',
    backend: 'billgates',
    design: 'andy warhol'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object values
const values = Object.values(data);
console.log(values);
console.log(values.length);


// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front para mostrar una estructura de elementos.
const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12,'hi')) // Se añade al final la palabra 'hi'


//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const data= {
    front:'Alej', // Puede existir
    back: 'Rel'
}