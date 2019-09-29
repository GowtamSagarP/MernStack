var name="JavaScript";

console.log(name);
console.log(name=="JS");

// if statement
if(name=="JS"){
    //if block
    console.log('Inside IF Block',name);
}else{
    console.log('Name Property has not matched');
}

var language = 'Java';

if(language=='JS'){
    console.log('Language is JavaScript');
}else if(language=='Java'){
    console.log('Language is Java');
}else if(language=='Python'){
    console.log('Language is Python');
}else {
    console.log('choose a language');
}

var num = 20;

if(num%2==0){
    console.log('num is even');
}else{
    console.log('num is odd');
}


var actualPrice = 3000;

if(actualPrice>=2500 && actualPrice<=5000){
    console.log('discountPrice is',actualPrice-500);
}else if(actualPrice>=10000){
    console.log('discountPrice is',actualPrice-1000);
}else if(actualPrice<=2000){
    console.log('discountPrice is',actualPrice-0);
}



// ternary operator

var numVal = 3;
var result = (numVal%2==0)?'Even':'odd';
console.log(result);