const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

if (myArray.length === 0) {
  console.log("empty")
} else if (myArray.length < 5) {
  console.log("small")
} else if (myArray.length < 10) {
  console.log("medium")
} else {
  console.log("large")
}
