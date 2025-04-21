let btnGenerarColor = document.getElementById("color");
let hexText = document.getElementById("hexa");

function generarColor(params) {
    return Math.floor(Math.random()*16777215).toString(16);
}

btnGenerarColor.addEventListener("click", setBg);
//proxima clase seguimos
document.body.style.backgroundColor = "#" + randomColor;