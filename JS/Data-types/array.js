// Empty Array
var emptyArr = [];
console.log(emptyArr);
console.log(typeof emptyArr);

//number type array  - elements of same datatypes
// Math, Phy, Che, Com
var firstSemScore = [20,30,40,50];
console.log(firstSemScore);
console.log(typeof firstSemScore);
console.log('Access First Index',firstSemScore[0]);
console.log(firstSemScore.length);

firstSemScore[1] = 35;
console.log(firstSemScore);
firstSemScore[4] = 60;
console.log(firstSemScore[12]); //undefined
console.log(firstSemScore);

//multiple data type array  - elements of same datatypes
var list = ['hello',20.3,false, undefined, null, [1,2,3]];
console.log(list);
console.log(list.length);
console.log(list[5]);
console.log(list[5][0]);



//push & pop

var hobbies = ['Singing','Dancing'];
console.log(hobbies);
// push adds element at last position of the array
hobbies.push('coding');
console.log(hobbies);
//pop removes the element at the last position
hobbies.pop();
console.log(hobbies);
