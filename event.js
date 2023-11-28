document.getElementById("greeting").addEventListener("click", function() {
    document.getElementById("greeting").innerHTML = "Goodbye";
});

document.getElementById("greeting").addEventListener("dblclick", function() {
    document.getElementById("greeting").innerHTML = "Hello";
});

document.getElementById("color").addEventListener("mouseover", function() {
    document.getElementById("color").style.backgroundColor = "red";
    document.getElementById("color").style.height = "500px"
    document.getElementById("color").style.width = "500px"
    document.getElementById("color").style.borderRadius = "50%"
});

document.getElementById("color").addEventListener("mouseout", function() {
    document.getElementById("color").style.backgroundColor = "blue";
    document.getElementById("color").style.height = "200px"
    document.getElementById("color").style.width = "200px"
    document.getElementById("color").style.borderRadius = "0%"
});

document.getElementById("thebox").addEventListener("focus", function() {
    document.getElementById("thebox").style.height = "30px";
});

document.getElementById("thebox").addEventListener("blur", function() {
    document.getElementById("thebox").style.height = "12px";
});

document.getElementById("copyme").addEventListener("copy", copyProtectionPart1);

function copyProtectionPart1() {
  document.getElementById("entice").innerHTML = "Now paste below!"
}

document.getElementById("pastehere").addEventListener("paste", copyProtectionPart2);

function copyProtectionPart2(){
    document.getElementById("warning").innerHTML = "Plagarism is a serious crime";
    document.getElementById("warning").style.opacity = "100%"
    document.getElementById("warning").style.color = "crimson"
}

document.getElementById("thief").addEventListener("dragstart", function() {
    document.getElementById("thief").innerHTML = "NO STEALING";
    document.getElementById("thief").style.color = "crimson"
});

document.getElementById("thief").addEventListener("dragend", function() {
    document.getElementById("thief").innerHTML = "That's what I thought";
    document.getElementById("thief").style.color = "black"
});