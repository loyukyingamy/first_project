var person = {
    name: 'Joe',
    greet: function () {
        console.log(`Hi my name is ${this.name}.`) ;  // this. means within the scope, instead of the var name, using => will bring the scope outside in
    }
};

person.greet();

// adding info with space 
var person = {name: 'Bob'}
person['last name']= 'Smith';
    console.log(person['last name']);
    console.log(person.name);

// defining variables
let apple = 'red';
const pear = 'yellow'; // const cannot be changed
apple = 'green';
pear = 'green'
    

// mapping [1,2,5,7,8,10,12] to  [2, 4, 10, 16, 20, 24]
var numbers = [2, 4, 7, 15, 19, 100]
undefined
numbers.map(function (b) {
return b*2;}
);

[2, 4, 7, 15, 19, 100].map((b) => b*2); //shorten the function

// destructuring: setting the variables from the properties
const person ={name:'Bob', age:18};
person.name
>> Bob

// new way
const person ={name:'Bob', age:18};
let {name, age} = person;  // name = person.name


//different ways to run function



let add = f(num1, num2) => {
    return num1 + num2;
}

let add = (num1, num2) => num1 + num2;

let double = num => num*2;
let greet = () => console.log('hello')

[1,2,5,7,8,10,12]

let array1= [1,2,5,7,8,10,12] 
let doublearray = array1*2


// HTML popping new window when clicking on the button
// html
        <button>click me</button>
         <script src="apptrial.js"></script>

// .js
const button = document.querySelector('button');
button.onclick = () => alert ("I ve been cliicked.")

//mutiple commands
const button = document.querySelector('button');
button.addEventListener('click',() => alert ("I ve been cliicked."));
button.addEventListener('click',() => alert ("I222 ve been cliicked."));

//to specify which class n id in js, same # . as CSS

//js. do the same function for one, and all results
const button = document.querySelector('button'); //querySelector('button') just do the first one
button.addEventListener('click',() => alert ("I ve been cliicked.")); //just pop in the first one


const button = document.querySelectorAll('.greet') //querySelectorAll('button.greet')  -> button.greet to be specific
    .forEach(element => { //loop the function for all
    element.addEventListener('click', () => {
        alert("I've been clicked")
    });
});

//grap these from the getbootstrap.com
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  


<div class="container"> //fixed width, with margin
  ...
</div>

<div class="container-fluid"> //100% width ,  spanning the entire width of the viewport.
  ...
</div>


//making columns and rows in a container //https://getbootstrap.com/docs/4.3/layout/grid/
<div class="container">
<div class="row">
  <div class="col-sm">
    One of three columns
  </div>
  <div class="col-sm">
    One of three columns
  </div>
  <div class="col-sm">
    One of three columns
  </div>
</div>
</div>
//other cool things 
    .d-flex
    tooltips
    btn