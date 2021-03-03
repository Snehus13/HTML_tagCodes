let name='snehal';
console.log(name);

//cannot be reserved keywords
//meaningful names
//let is another keyword usedfor declaration of varaiable

let firstName='snehal';
let lastName='dhulshetti';
console.log(firstName);
console.log(lastName);

//constants

const interestRate=0.3;
console.log(interestRate);

//premitive datatypes
let name1='sneha';//String literal
let age=30;//number litral
let isApproved=true;//boolean literal
let Fisrtname=undefined;
let Lastname=null;


console.log(name1);
console.log(age);
console.log(isApproved);
console.log(Fisrtname);
console.log(Lastname);


//dynamic typing
//inconsole yo can change the type of var

//typeof type in console to check the type of data
//type of selectedColor is object
//reference types = arrays,object,function

//objects ex obj person and its var's age,name
let person={
    Name:'nayan',
    Age:22
};
//dot notation for accesiing name property
person.Name='raj';
//another way is bracket notation
person["Name"]='shayan';
console.log(person);

//Arrays
let selectedColors=['red','blue'];
selectedColors[2]=1;
console.log(selectedColors);
//obejcts as well as arrays are dynamic
//array is obj in javascript

//function
function greet(){
    //body of function
    console.log('hello world');
}//nosemicolon at the end

greet();

//input to function

function add(value){
   console.log('sum is =' + value);
}
add(2+4);

//types ofbfunction
function meet(fname,lname){
    console.log('hello ' + fname + '' +lname)
}
meet('snehal' ,'nayanpatil');



