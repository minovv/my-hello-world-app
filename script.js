const divWithId = document.getElementById("div-id")
divWithId.style.color = "red"

const divWithClass = document.getElementsByClassName("div-class")

// divWithClass[0].style.color = "blue"
// divWithClass[1].style.color = "purple"

const divWithClassArray = Array.from(divWithClass)

divWithClassArray.forEach((div) => (div.style.color = "green"))
