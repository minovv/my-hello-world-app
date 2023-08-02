const isUserLoggedIn = false

const welcomeMessage = isUserLoggedIn ? "Welcome" : "Please log in"

console.log(welcomeMessage)

/* This example is probably the only use case
for ternary operator. My mentor suggest to use good 
old if-else-if's. */
