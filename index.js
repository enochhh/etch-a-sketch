const gridContainer = document.getElementById('gridContainer');
const clear = document.getElementById('clear');
const erase = document.getElementById('erase');
const userDraw = document.getElementById('color');
const rainbowDraw = document.getElementById('rainbow');
let sliderRange = document.getElementById('sliderRange');
let sliderVal = document.getElementById('sliderVal');
let inputColor = document.getElementById('input-color');
let colorPicker = document.getElementById('colorPicker');

/* Event listeners for grid manipulation*/
clear.addEventListener("click", clearGrid);
rainbowDraw.addEventListener("click", colorState);
userDraw.addEventListener("click", colorState);
erase.addEventListener("click", eraseGrid);

/* Event listeners to show which button is currently activated */
clear.addEventListener("click", activeButton);
rainbowDraw.addEventListener("click", activeButton);
userDraw.addEventListener("click", activeButton);
erase.addEventListener("click", activeButton);

/* Set the default color on page load so that users can immediately start drawing*/
let buttonState = 'color';
let userChoiceColor = 'black';

window.onload = function() {
    userDraw.click();
}

/* Slider Display */
sliderVal.innerHTML = `${sliderRange.value} x ${sliderRange.value}`;

sliderRange.oninput = function() {
  sliderVal.innerHTML = `${this.value} x ${this.value}`;
}

/* Color Picker */ 
inputColor.oninput = function() {
    userChoiceColor = `${this.value}`;
}

inputColor.onchange = function() {
    colorPicker.style.backgroundColor = inputColor.value;
}

colorPicker.style.backgroundColor = inputColor.value;
/* Refresh and create new grid every time grid size is changed,
    and continue using the same color from the saved button state*/
sliderRange.onchange = function() {
    gridContainer.innerHTML = '';
    createGrid(this.value);
    colorPick(buttonState);
}

/* Save the color state when color button is clicked */
function colorState(e) {
    if (e.target.id === 'color') {
        buttonState = 'color';
        colorPick(buttonState);
    }
    else if (e.target.id === 'rainbow') {
        buttonState = 'rainbow';
        colorPick(buttonState);
    }
}

function createGrid(gridSize) {
    // For reference on grid :https://fionnachan.medium.com/dynamic-number-of-rows-and-columns-with-css-grid-layout-and-css-variables-cb8e8381b6f2
    gridContainer.style.setProperty('--grid-rows', gridSize);
    gridContainer.style.setProperty('--grid-cols', gridSize);
    const size = gridSize * gridSize;
    for (i = 0; i < size; i++) {
        const cell = document.createElement('div');
        cell.classList.add("cell");
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
}

function pickColor (e) {
    e.style.backgroundColor = userChoiceColor;
}

function resetColor (e) {
    e.style.backgroundColor = 'transparent';
}

/* Use the saved color state to set each grid square to that color */
function colorPick(buttonState) {
    let gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
            if(buttonState === 'color') {
                pickColor(item);
            }
            else if(buttonState ==='rainbow') {
                rainbowColor(item);
            }
        })
    );
} 

function activeButton(e) {
    let btn = document.querySelectorAll('.btn');
    btn.forEach(item => item.style.backgroundColor = '');
    e.currentTarget.style.backgroundColor = 'gray';
}

createGrid(sliderRange.value);


/*function colorPick(event) {
    let gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => item.addEventListener('mouseover', (e) => {
            if(event.target.id === 'black') {
                blackColor(item);
            }
            else if(event.target.id ==='rainbow') {
                rainbowColor(item);
            }
        })
    );
}*/ 





