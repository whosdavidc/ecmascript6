function newFunction (name, age, country){
    var name = name || 'whosdavidc';
    var age = age || 20;
    var country = country || 'Argentina';

    console.log(name, age, country);
}


//es6 
function newFunction2 (name = 'David', age = 20, country = 'Argentina'){
    console.log(name, age, country);
};


newFunction2();
newFunction2('Juan', 45, 'Argentina');


let hello = "Eren Jaeger";
let world = "supremacy";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase);




let phrase = "Del estudio de Arquimedes sobre las maquinas simples, surge la frase: \n"+"Dadme un punto de apoyo y movere al mundo.";

let phrase2 = `Del estudio de Arquimedes sobre las maquinas simples, surge la frase: 
Dadme un punto de apoyo y movere al mundo.`;

console.log(phrase);
console.log(phrase2);

let person = {
    'name': 'whosdavidc',
    'age': 20,
    'country': 'Argentina'
}

console.log(person.name, person.age, person.country);


let { name, age, country} = person;

console.log(name, age, country);


let eldia = ['Eren', 'Floch', 'Yelena'];
let paradise = ['Pocco', 'Reiner', 'Bertoto'];


let union = ['Mikasa', ...eldia, ...paradise]; //I LOVE IT

console.log(union);





{
    var globalVar = 'Global var'; //GLOBAL
}

{
    let globalLet = 'Global let'; //LOCAL
    console.log(globalLet);
}


console.log(globalVar);






let nme = 'whosdavidc';
let age = '20';

//es5
obj1 = {name: nme, age: age};


//es6
obj2 = {nme, age}; //aguante



const names = [
    { name: 'whosdavidc', age:20 },
    { name: 'Oscar', age:32 }
]


let listOfNames = names.map(function(item){
    console.log(item.name)
})


let listOfNames2 = names.map(item => console.log(item.name));


const listOfNames3 = (name, age, coutry) =>{
    //accion
}


const square = num => num * num;

