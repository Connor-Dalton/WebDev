function tellFortune() {
    numOfChildren = document.getElementById("children").value;
    partnerName = document.getElementById("name").value;
    jobTitle = document.getElementById("job").value;

    document.getElementById("fortune").innerText = `You will be a ${jobTitle} married to ${partnerName}
    with ${numOfChildren}`;
}

function calculateDogAge() {
    puppyAge = document.getElementById("dog-age").value;
    dogAge = puppyAge * 7;
    document.getElementById(`age`).innerHTML = `Your dog is ${dogAge} years old in dog years`;
}

function calculateSupply() {
    age = document.getElementById("current-age").value
    amountPerDay = document.getElementById(`amount-per-day`).value

    maxAge = 80;
    amountPerYear = amountPerDay * 365.25;
    totalAmount = (maxAge - age) * amountPerYear;
    document.getElementById(`Supply`).innerHTML = 
    (` You will need ${totalAmount} to last to the age of ${maxAge}`)
}

function calculateCircumference() {
    radius = document.getElementById("radius").value
    circumference = 2 * Math.PI * radius;
    document.getElementById(`circumference`).innerHTML = `The circumference is ${circumference}`;
}

// const calcArea = () => {`The area is ${Math.PI * radius * radius}`};

function celsiusToFahrenheit() {
    celsius = document.getElementById("celsius").value;
    fahrenheit = celsius * 9 / 5 + 32;
    document.getElementById(`fahrenheit`).innerHTML = `${celsius}C is ${fahrenheit}F`;
}

// const celsiusToFahrenheit = () => console.log(`${celsius}C is ${fahrenheit}F`);

// function fahrenheitToCelsius() {
//     celsius = (fahrenheit - 32) * 5 / 9;
//     console.log(`${fahrenheit}F is ${celsius}C`);
// }

// const fahrenheitToCelsius = () => console.log(`${fahrenheit}F is ${celsius}C`);