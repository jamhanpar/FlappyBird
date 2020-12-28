// sum function
function sum(...callArgs) {
    // let nums = [];

    // return function accumulator(num) {
        // nums.push(num);
        // console.log(nums.reduce((acc, ele) => acc + ele));
    // }

    return callArgs.reduce((acc, ele) => acc + ele);
}



//this is the bind function.
Function.prototype.myBind = function (ctx, ...bindArgs) {
    const fn = this;
    //useful when user wants to include callbacks.
    return function (...callArgs) {
        return fn.apply(ctx, bindArgs.concat(callArgs));
    };

    //will work as a regular bind without callbacks.
    // return fn.apply(ctx, bindArgs);
};

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
};

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");



// CurriedSum
// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// sumThree(4, 20, 6); // == 30

// // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

function curriedSum(numArgs) {
    let numbers = [];

    function _curriedSum(num) { 
        numbers.push(num);
        
        if (numbers.length === numArgs) {
            console.log(numbers.reduce((acc, num) => acc + num));
        };

        return _curriedSum
    };

    return _curriedSum
};

