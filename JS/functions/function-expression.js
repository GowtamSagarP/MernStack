//Function Expression

var sum = function(a,b){
    return a+b;
}

var res = sum(2,3);

console.log(res);


//Named Function Expression

var sum1 = function add(a,b){
    return a+b;
}

var res1 = sum1(3,6);

console.log(res1);


// Use of Anonymous Functions
// 1. Self Executing FUnction
// 2. Call backs

//Self executing function
(function(){
    console.log('I am anonymous');
})();


//Call backs
function foo(){
    console.log('Hello I am callback');
}

function acceptCallback(cb){
    cb();
}

acceptCallback(foo);