/* In case we don't know how many times 
to loop trough the results we are using
while loops */

const person = {
  name: "Kyle",
  friend: {
    name: "Joe",
    friend: {
      name: "Sally",
    },
  },
}

let currentPerson = person

while (currentPerson != null) {
  console.log(currentPerson.name)
  currentPerson = currentPerson.friend
}
