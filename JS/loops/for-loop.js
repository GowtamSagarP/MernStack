//loops

//table - 2
for(var i = 1; i<=10; i++){
   // console.log(`2 x ${i} = ${2*i}`);
   console.log("2 x "+i+" = "+2*i);
}


// table - 2 to 10
for(var i = 2; i<=10; i++){
    for(var j = 1; j <=10;j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
 }


//iterate over an array

var names = ['JS','Node','Express','MongoDB'];
for(var i = 0; i <=names.length-1; i++){

    console.log(names[i]);
}

var numValues = [2,3,4,5,6,7];
for(var i = 0; i<numValues.length;i++){
    numValues[i]*=2;
}
console.log(numValues);

// for of
//for in