const btn = document.querySelector("[data-btn]")
const link = document.querySelector("a")

console.log(link)

btn.addEventListener("click", () => {
  console.log("clicked")
})

console.log(btn)

link.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("clicked")
})
