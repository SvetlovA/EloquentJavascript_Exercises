var width = 0;
var height = 0;
var cells = [];
var grid = document.querySelector(".grid");


function createGrid() {
    width = document.querySelector("#width").value;
    height = document.querySelector("#height").value;
    deleteGrid(grid);

    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            var cell = document.createElement("input");
            cell.setAttribute("type", "checkbox");
            cell.checked = setGrid();
            cells.push(cell);
            grid.appendChild(cell);
        }
        grid.appendChild(document.createElement("br"));
    }
}

function setGrid() {
    if (Math.random() > 0.5) {
        return true;
    }
}

function countNeighbors(grid, x, y) {
    var count = 0;
    for (var y1 = Math.max(0, y - 1) ; y1 <= Math.min(height - 1, y + 1) ; y1++) {
        for (var x1 = Math.max(0, x - 1) ; x1 <= Math.min(width - 1, x + 1) ; x1++) {
            if ((x1 != x || y1 != y) && grid[x1 + y1 * width].checked)
                count += 1;
        }
    }
    return count;
}

function turn() {
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            var neighbors = countNeighbors(cells, i, j);
            var position = j + i * width;
            if (neighbors < 2 || neighbors > 3) {
                cells[position].checked = false;
            }
        }
    }
    return cells;
}

function deleteGrid(node) {
    while (node.firstChild) {
        grid.removeChild(node.firstChild);
    }
}

function createNewGrid(cells) {
    deleteGrid(grid);
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            var cell = document.createElement("input")
            cell.setAttribute("type", "checkbox");
            cell.checked = cells[j + i * width].checked ? true : false;
            grid.appendChild(cell);
        }
        grid.appendChild(document.createElement("br"));
    }
}

function exec() {
    createNewGrid(turn());
}