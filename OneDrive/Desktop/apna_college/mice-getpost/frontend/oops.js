arr1=[1,2,3,4];
arr2=[1,2,3,4];
console.log(arr1);
arr1.hello=()=>{
    console.log("hello i am array");
}
arr2.hello=()=>{
    console.log("hello i am array");
}
arr1.hello ===arr2.hello //output alawys false
arr1.__proto__; //arr is name of array
Array.prototype;//Array is keyword
String.prototype;//for string prototype view

///////factory function/////////
function person(name,age){
   const details={
       name:name,
       age:age,
       talk(){
        console.log(`i am ${this.name}`);
        }
    };

    return details;
}
let p1=person("abhra",22);
let p2=person("sudipta",21);
