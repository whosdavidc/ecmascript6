const obj = {
    name: 'David',
    age: 20,
    country: 'Argentina wachin'
}


const obj1 = {
    ...obj,
    facha:'too much.'
}

console.log(obj1);


let { name, ...all } = obj;
console.log(name,all);




const helloWorld = () => {
    return new Promise ((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve ('Hello WOrld'), 3000) 
            : reject(new Error ('Test Error'))
    });
}



helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finally...'))