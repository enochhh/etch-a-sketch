const container = document.getElementById('container');
const clear = document.getElementById('clear');
const erase = document.getElementById('erase');
const blackDraw = document.getElementById('black');
const rainbowDraw = document.getElementById('rainbow');

clear.addEventListener("click", clearGrid);
blackDraw.addEventListener("click", colorItem);
rainbowDraw.addEventListener("click", colorItem);
erase.addEventListener("click", eraseGrid);

function createGrid(rows, cols) {
    // For reference on grid :https://fionnachan.medium.com/dynamic-number-of-rows-and-columns-with-css-grid-layout-and-css-variables-cb8e8381b6f2
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    const size = rows * cols;
    for (i = 0; i < size; i++) {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        // cell.addEventListener('mouseover', () => {
        //     cell.classList.add(hover);
        // });
        container.appendChild(cell).className = "grid-item";
    }
}

function eraseGrid() {
    // For reference on grid :https://fionnachan.medium.com/dynamic-number-of-rows-and-columns-with-css-grid-layout-and-css-variables-cb8e8381b6f2
    let gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            resetColor(item);
        })
    })
}

function clearGrid() {
    let gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => {
        resetColor(item);
    })
}

/* Rainbow color */
function random (number) {
    return Math.floor(Math.random() * (number+1));
}
  
function rainbowColor (e) {
    const rndCol= 'rgb(' + random(255) + ',' + random(255) +',' + random(255) + ')';
    e.style.backgroundColor = rndCol;
    //console.log(e.target);
    /*Wondering why 'e.target.style' kept returning undefined; found that it was due to the fact that 'e' was not an existing target 
    at the time of function creation*/
}

/* Default color (black) */
function blackColor (e) {
    e.style.backgroundColor = 'black';
}

function resetColor (e) {
    e.style.backgroundColor = 'transparent';
}



/*Color select of each grid square*/
function colorItem() {
    let gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
        rainbowColor(item);
    })
    );
} 

createGrid(64,64);


