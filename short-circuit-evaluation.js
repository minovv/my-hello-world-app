/* We are talking about Short Circuit Evaluation in JS when executing
stops after a meeting 1st condition during checking to see if
properties on objects exists */

const person = {}

console.log(person && person.address && person.address.street)

/* Exemple above will give us Undefined instead of Error just
becouse of the nature of the way JS and the && Operand is working.
This is a use case to avoid errors when we are not sure if we actually have
properties of the const person or not. */

function printName(name) {
  name = name || "Guest"
  console.log("Hello " + name)
}

printName()

/* The same is for the example above. If the name argument doesn't provided
we are getting the default value which is Guest*/
