
let gridContainer = document.querySelector ("#gridContainer");


let gridDimensions = 16
//960px is the height/w of gridContainer in CSS, minus 1 for square margin
boxDimensions = 960 / gridDimensions - 1
let dimensionsButton = document.querySelector("#dimensionsButton")

addSquares(0, gridDimensions)

dimensionsButton.addEventListener("click", () => {
    let dimension = prompt("Type dimension width(<100)", 16);
    gridDimensions = parseInt(dimension)
    if (gridDimensions > 100) {
        alert ("100x100 is the maximum. Select a number < 100");
        return;
    }else{
        removeSquares()
        boxDimensions = 960 / gridDimensions - 1
        addSquares(0, gridDimensions)
        }
    })
    
    

function removeSquares() {
        gridContainer.innerHTML=""
}

function addSquares(i, gridDimensions) {
    for (i = 0; i < (gridDimensions * gridDimensions); i++ ) {
        let square = document.createElement("div");
        square.style.maxWidth = `${boxDimensions}px`;
        square.style.maxHeight = `${boxDimensions}px`;
        square.style.minHeight = `${boxDimensions}px`;
        square.style.minWidth = `${boxDimensions}px`;
        square.style.margin = "0.5px"
        square.style.backgroundColor = "cornflowerblue";
        gridContainer.appendChild(square);
    }
}

gridContainer.addEventListener("mouseover", function (e) {
    e.stopImmediatePropagation()
    e.target.style.backgroundColor = "black"
})