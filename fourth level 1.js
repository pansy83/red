let hehe={
    name:'zwj',
    age:18,
    gender:'女'
}
console.log(hehe);
console.log(typeof hehe);

let obj =new Object();
obj.name='BBH';
obj.age='30';
console.log(obj);
console.log(obj.age);

function Person(name,age){
    this.name=name
    this.age=age
    this.sayname=()=>{
        console.log(this.name)
    }
}
const p1=new Person('BBH',30);
const p2=new Person('haha',24);
console.log(p1,p2);
