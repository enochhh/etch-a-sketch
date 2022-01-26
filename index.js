const container = document.getElementById('container');
const clear = document.getElementById('clear');
const draw = document.getElementById('black');
const rainbowDraw = document.getElementById('rainbow');

const greenHover = 'green-hover-style';
const blackHover = 'black-hover-style';
let hover = "";

draw.addEventListener("click", () => {
    hover = blackHover;
});

rainbowDraw.addEventListener("click", () => {
    hover = greenHover;
})





function createGrid(rows, cols) {
    // For reference on grid :https://fionnachan.medium.com/dynamic-number-of-rows-and-columns-with-css-grid-layout-and-css-variables-cb8e8381b6f2
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    const size = rows * cols;
    for (i = 0; i < size; i++) {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        cell.addEventListener('mouseover', () => {
            cell.classList.add(hover);
        });
        container.appendChild(cell).className = "grid-item";
    }
}

function clearGrid() {
    // For reference on grid :https://fionnachan.medium.com/dynamic-number-of-rows-and-columns-with-css-grid-layout-and-css-variables-cb8e8381b6f2
    const cellList = container.querySelectorAll('div');
    const classes = [greenHover, blackHover];
    cellList.forEach(function (element) {
        element.classList.remove(...classes);
    })
}

clear.addEventListener("click", clearGrid);
createGrid(64,64);


