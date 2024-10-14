
let gridContainer = document.querySelector ("#gridContainer");
let square = document.createElement("div");
    square.style.maxWidth = "60px";
    square.style.maxHeight = "60px";
    square.style.minHeight = "60px";
    square.style.minWidth = "60px";
    square.style.borderColor = "black";
    square.style.backgroundColor = "red";

for (i = 0; i < 256; i++ ) {
    let square = document.createElement("div");
    square.style.maxWidth = "59px";
    square.style.maxHeight = "59px";
    square.style.minHeight = "59px";
    square.style.minWidth = "59px";
    square.style.margin = "0.5px"
    square.style.backgroundColor = "red";
    gridContainer.appendChild(square);
}