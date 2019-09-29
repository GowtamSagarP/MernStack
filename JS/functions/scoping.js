//Scope =>
var a = 10;

if(true){
    var b = 20;
    console.log(a);
    console.log('Value of b',b);
}

console.log('Val of b outside of the block',b);

function foo(){
    var c = 10;
    d =30;
    console.log('Inside Function',a);
    console.log('Value of b inside fn',b);
    console.log('Value of b inside fn',c);
}

foo(2);
//console.log('Value Of c outside fn',c);

console.log('Value Of d outside fn',d);

