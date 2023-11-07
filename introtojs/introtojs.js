const myName = "Connor"

let favColor = "Orange"

favColor = "Purple"

let age = 17

mainPerson = {
    name: "Connor",
    age: 17,
    favColor: "Orange"
}

favFoods = ["Ranch", "Burgers", "Ice Cream"]

const isAlive = true

function describePerson(person) {
    console.log("MISSING PERSON:" + person.name)
    console.log(`FOUND HIM: ${person.name}`)
}

describePerson(mainPerson);

if ( myName === "Connor") {
    document.getElementById("Title").innerHTML = `Hello ${myName}`;
} else {
    document.getElementById("Title").innerHTML = `Who are you?`;
}

const para = document.createElement("p")
para.innerHTML = "I'm  a sentence, how cool!"
document.getElementById("div1").appendChild(para)