//Normal function
function myFirstfunction() {
    const greeting = "Hello world!";

    return greeting;
}

console.log(myFirstfunction());

//Anonymous function
const myVariableFunction = function () {
    console.log("Hello from the anonymous one >:)");
};

//Arrow function
const myArrowFunction = () => {
    console.log("Gang gang arrow in here");
};

function sayHiLater(anyFunctionReference) {
    anyFunctionReference();
}

sayHiLater(myVariableFunction);
sayHiLater(myArrowFunction);

function interact(genInteraction, name) {
    console.log(genInteraction(name));
}

function poke(name) {
    return name + " is being poked!";
}

interact(poke, "BIG");

interact(name => {return "Hugging " + name}, "Napster")