function calcExpenses() {
    let salary = document.getElementById("salary").value

    let food = document.getElementById("food").value
    let house = document.getElementById("house").value
    let transport = document.getElementById("transport").value
    let school = document.getElementById("school").value
    let fun = document.getElementById("fun").value
    let other = document.getElementById("other").value

    let total = salary - food - house - transport - school - fun - other

    document.getElementById("results").innerHTML = `$${total}`
}