const container = document.getElementById('container');

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    const size = rows * cols;
    for (i = 0; i < size; i++) {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        // cell.innerText = (i+1);
        container.appendChild(cell).className = "grid-item";
    }
}

createGrid(16, 16);