//function Declaration

function myFunc(){
    console.log('Inside the function log');
}

myFunc();

//myFunc();

function add(a,b){
    console.log(a,b);
    if(a<=50){
        var sum = a + b;
    }else{
        console.log('Pass a number less than 50');
    }
    
    console.log('Sum is',sum);
    return sum;
}

var sum1=add(10,20);
var sum2=add(23,27);


console.log(sum1);
console.log(sum2);


function add(a,b){
    console.log(arguments);
    var sum = a + b;
    console.log('Pass a number less than 50');
    return sum;
}


function multipleAdd(){
    console.log('calling multipleAdd');
    var sum = 0;
    for(var i = 0; i<arguments.length;i++){
        sum = sum + arguments[i];
    }
    return sum;
}

var multipleAdd = multipleAdd(6,7,8,9);
console.log(multipleAdd);

function evenOrOdd(a){
    if(a%2==0){
        console.log('Even');
    }else{
        console.log('Odd');
    }
}

evenOrOdd(43);