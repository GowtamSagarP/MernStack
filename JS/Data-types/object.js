// empty_object

var empty_obj = {};
console.log(typeof empty_obj);
console.log(empty_obj);

var js = {
    name:'Java Script',
    gender:'Female',
    age:20
}

var result = {
    math: 40,
    physics:60,
    computers:80
}

var result1 = {
    math: 40,
    physics:60,
    "basic computers":80,
    "": 45
}

console.log(js);
console.log(result);
console.log(result1);

var person = {
    name:'Gowtam Sagar',
    gender:'Male',
    age:30,
    married:true,
    hobbies:['Singing','Coding','Cricket'],
    qualification:{
        degree : 'Btech',
        Subject: 'Electronics & Communications',
        passedyear:2009,
        percentage:60
    },
    friends :[
        {
            name : 'Ashutosh',
            gender :'male'
        },
        {
            name : 'Santosh',
            gender :'male'
        }
    ]
}


console.log(person);

// reading elements from objects - dot notation and brace notation
console.log('Math result is ',result.math);

console.log('Name is',person.name);

console.log('Name is',person.hobbies[1]);

console.log('Friends ',person.friends[1].gender);

//update a property in an object

person.name = 'Gowtam Sagar Pinninti'

console.log('Updated Name is',person.name);

person.married = false;

console.log('Updated marital status',person.married);


//delete a property in an object

delete person.age;

console.log(person);


// brace notation

console.log(result1["basic computers"]);

var userInput = 'name';

console.log(person[userInput]);

console.log(person['friends'][1]['gender']);