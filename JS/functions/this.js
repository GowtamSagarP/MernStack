// this keyword points to current object;

let a = 10;
console.log(this);

function add(){
    console.log(this);
}

add();

var obj = {
    name:'Hello',
    desc : function(){
        console.log(this);
        function inner(){
            console.log('inner',this);
        }
    }
}

obj.desc();