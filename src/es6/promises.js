import   myhello   from './module.js';


const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('UPS');
        }
    });
}



helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("Im using WhatsApp!"))
    .catch(response => console.log(error));





class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}



const calc = new calculator();
console.log(calc.sum(2,4));




console.log(myhello());
