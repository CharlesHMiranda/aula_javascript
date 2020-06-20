
// Destructuring functions
function sum([a, b] = [0, 0]) {
    return a + b;
}

console.log(sum([5, 1]));
console.log(sum());



/*
var obj = {
    name: 'Celso'
};
// Destructuring Assignment
var { name } = obj;

console.log(name);


/*
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Destructuring Assignment
var [apple2, banana2, orange2, [tomato2]] = ['apple', 'banana', 'orange', ['tomato']];

console.log(apple, apple2);
console.log(tomato, tomato2);


// spread operator ...
// strings, arrays, literal objects e objetos iteráveis
/*
const arr = [1, 2, 3, 4];
// const arr2 = arr.concat([5, 6, 7]);
const arr2 = [...arr, 5, 6, 7];

console.log(arr2);


/*
const str = 'Uma variavel qualquer';
function logArgs(...args) {
    // console.log(args);
    console.log(arguments);
}
// logArgs(...arr);
// rest operator ... spread operator ...
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    // return multiply.apply(undefined, rest);
    return multiply(...rest);
};

console.log(sum(5, 5, 5, 2, 3));

/*
function sum(...args) {
    // console.log(args);
    // console.log(arguments);
    return args.reduce((acc, value) => acc + value, 0);
}
*/


/*
function sum(a, b) {
    var value = 0;
    console.log(arguments);
    for (var i=0; i < arguments.length; i++) {
        value += arguments[i];
    
    }
    return value;
}

console.log(sum(5, 5, 2, 3));



/*
var propName = 'test';

var obj = {};

obj[propName] = 'prop value';

console.log(obj);


/*
function method1() {
    console.log('Method called.');
}

var obj = {
    method1
};

obj.method1();

/*
var prop1 = "Uma string qualquer.";

var obj = {
    // prop1: prop1 // equivalente
    prop1
    // Pode-se omitir o lado direito da sintaxe
}

console.log(obj);



/*

var obj = {
    // sum: function sum(a, b) {
    sum (a, b) {
        return a + b;
    }
};

console.log(obj.sum(1, 5));



/*
function randomNumber() {
    console.log("Generating a random number...");
    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5));
console.log(multiply(5, 5));

/*

var Obj = {
    showContext: function showContext() {
        console.log(this);
        console.log("Passei no This");
    },
    log: function log(value) {
        console.log(value);
        console.log("Passei no value");
    }
};

// Obj.showContext();
Obj.log("Teste.");
*/
