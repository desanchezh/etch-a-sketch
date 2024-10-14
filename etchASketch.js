
let gridContainer = document.querySelector ("#gridContainer");
let square = document.createElement("div");
    square.style.maxWidth = "60px";
    square.style.maxHeight = "60px";
    square.style.minHeight = "60px";
    square.style.minWidth = "60px";
    square.style.borderColor = "black";
    square.style.backgroundColor = "red";


gridDimensions = 80;

//960px is the height/w of gridContainer in CSS, minus 1 for margin
boxDimensions = 960 / gridDimensions - 1


for (i = 0; i < (gridDimensions * gridDimensions); i++ ) {
    let square = document.createElement("div");
    square.style.maxWidth = `${boxDimensions}px`;
    square.style.maxHeight = `${boxDimensions}px`;
    square.style.minHeight = `${boxDimensions}px`;
    square.style.minWidth = `${boxDimensions}px`;
    square.style.margin = "0.5px"
    square.style.backgroundColor = "red";
    gridContainer.appendChild(square);
}

gridContainer.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "black"
})