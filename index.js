const gridContainer = document.getElementById('gridContainer');
const clear = document.getElementById('clear');
const erase = document.getElementById('erase');
const blackDraw = document.getElementById('black');
const rainbowDraw = document.getElementById('rainbow');
let sliderRange = document.getElementById('sliderRange');
let sliderVal = document.getElementById('sliderVal');

clear.addEventListener("click", clearGrid);
// blackDraw.addEventListener("click", colorPick);
// rainbowDraw.addEventListener("click", colorPick);
blackDraw.addEventListener("click", colorState);
rainbowDraw.addEventListener("click", colorState);
erase.addEventListener("click", eraseGrid);
let buttonState = 'black';
colorPick(buttonState);

sliderVal.innerHTML = sliderRange.value;

sliderRange.oninput = function() {
  sliderVal.innerHTML = this.value;
}

function colorState(e) {
    if (e.target.id === 'black') {
        buttonState = 'black';
        colorPick(buttonState);
    }
    else if (e.target.id === 'rainbow') {
        buttonState = 'rainbow';
        colorPick(buttonState);
    }
}

sliderRange.onchange = function() {
    gridContainer.innerHTML = '';
    createGrid(this.value);
    colorPick(buttonState);
}

createGrid(sliderRange.value);

function createGrid(gridSize) {
    // For reference on grid :https://fionnachan.medium.com/dynamic-number-of-rows-and-columns-with-css-grid-layout-and-css-variables-cb8e8381b6f2
    gridContainer.style.setProperty('--grid-rows', gridSize);
    gridContainer.style.setProperty('--grid-cols', gridSize);
    const size = gridSize * gridSize;
    for (i = 0; i < size; i++) {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        // cell.addEventListener('mouseover', () => {
        //     cell.classList.add(hover);
        // });
        gridContainer.appendChild(cell).className = "grid-item";
    }
}

function eraseGrid() {
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

// function colorPick(event) {
//     let gridItem = document.querySelectorAll(".grid-item");
//     gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
//             if(event.target.id === 'black') {
//                 blackColor(item);
//             }
//             else if(event.target.id ==='rainbow') {
//                 rainbowColor(item);
//             }
//         })
//     );
// } 

function colorPick(buttonState) {
    let gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
            if(buttonState === 'black') {
                blackColor(item);
            }
            else if(buttonState ==='rainbow') {
                rainbowColor(item);
            }
        })
    );
} 



/*Color select of each grid square*/
// function colorBlack() {
//     let gridItem = document.querySelectorAll(".grid-item");
//     gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
//             blackColor(item);
//         })
//     );
// } 

// function colorRainbow() {
//     let gridItem = document.querySelectorAll(".grid-item");
//     gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
//             rainbowColor(item);
//         })
//     );
// } 




