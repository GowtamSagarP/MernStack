function foo(){
    return 'I am function foo';
}

// function acceptsFunction(cb){
//     return cb();
// }

// function acceptsFunction(cb){
//     let res = cb();
//     return res;
// }

// let res = acceptsFunction(foo);

// console.log(res);


// function add(a,b){
//     return a+b;
// }

// function square(x){
//     return x*x;
// }

// let n1 = 10;
// let n2 = 5;

// let addition = add(n1,n2);
// let sq = square(addition);

// console.log(addition);
// console.log(sq);



function add(a,b, cb){
    if(typeof a!='number' || typeof b!='number'){
        cb('Pass a number to add',null);
    }else{
        let sum = a+b;
        cb(null, sum);
    }
}


function square(x, cb){
    if(typeof x!='number'){
        cb('Square accepts a number',null);
    }else{
        cb(null,x*x);
    }
}

let n1 = 10;
let n2 = 5;

add(n1,n2,function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        square(data,function(err,sq){
            if(err){
                console.log(err);
            }else{
                console.log(sq);
            }
        })
    }
});



// function outer(){
//     let a = 10;
//     console.log('I am outer function');
//     function inner(){
//         let b = 20;
//         console.log('I am inner function');
//     }
//     return inner();
// }

// outer();


// function outer(){
//     let a = 10;
//     console.log('I am outer function');
//     function inner(){
//         let b = 20;
//         console.log('I am inner function');
//     }
//     return inner;
// }

// let val = outer();
// val();



function outer(x){
    let a = 10;
    console.log('I am outer function');
    function inner(y){
        let b = 20;
        console.log('I am inner function');
        //return a+y;
        return x+y;
    }
    return inner;
}

let val = outer(10);
let resl = val(10);
let resl2 = val(20);

console.log(resl);
console.log(resl2);



// currying
function sum (x){
    return function(y){
        return x+y;
    }
}

let firstVal = sum(2);
let finalRes = firstVal(2);

console.log(finalRes);