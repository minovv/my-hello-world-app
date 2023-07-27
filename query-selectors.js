const dataAttributeElement = document.querySelector("[data-test]")
const divWithClasses = document.querySelectorAll(".div-class")

dataAttributeElement.style.color = "green"
divWithClasses.forEach((div) => (div.style.color = "red"))
const input = document.querySelector("body > input[type = 'text']")

console.log(divWithClasses)
