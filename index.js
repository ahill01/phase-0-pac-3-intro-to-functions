// Follow along with the examples here
function doNothing(){};

function sayHello(){
    console.log("Hello!");
};
//sayHello();

function sayHelloToGuadalupe(){
    console.log("Hello, Guadalupe!")
};

function sayHelloToLiz(){
    console.log("Hello, Liz!")
};

function sayHelloToSamip(){
    console.log("Hello, Samip!")
};
//sayHelloToGuadalupe();
//sayHelloToLiz();
//sayHelloToSamip();

function doSomething(thing){
    console.log(thing)
};
//doSomething("something")

function sayHelloTo(firstName){
    console.log(`Hello, ${firstName}!`);
};

//sayHelloTo("Allison");
//console.log(firstName); 

function say(greeting,firstName){
    console.log("I was called");
    return `${greeting}, ${firstName}!`;
};
//say("Goodbye","Julio");
//say("Julio","hello");
//console.log(say("Hello","Liz"));

function add(x,y){
  return x+y;
};
//console.log(add(1,2));
//console.log(add(80,9000));

function petDog(dogName,numPets){
    console.log("Dog Name: ", dogName, " number of pets: ", numPets);
    return `${dogName} has been pet ${numPets} times`; 
};
console.log(petDog("Sam","3"));