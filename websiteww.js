document.getElementById("correct").addEventListener("click", function() {
    document.getElementById("answer").innerHTML = "CORRECT!";
});

document.getElementsByClassName("wrong").addEventListener("click", function() {
    document.getElementById("answer").innerHTML = "WRONG!";
});