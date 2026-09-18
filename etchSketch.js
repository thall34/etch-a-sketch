function drawGrid(size) {
    const gridContainer = document.getElementById("container");

    for (let i = 0; i < size; i++) {
        const rowItem = document.createElement("div");
        rowItem.className = "row-item";
        for (let j = 0; j < size; j++) {
            const colItem = document.createElement("div");
            colItem.className = "col-item";
            colItem.addEventListener("mouseover", () => {
            colItem.className = "col-item-fill";
        });
            rowItem.appendChild(colItem);
        };
        gridContainer.appendChild(rowItem);
    };
};

function clearGrid() {
    const rowsRemove = document.querySelectorAll(".row-item");
    rowsRemove.forEach(row => {
        row.remove();
    });
};

const resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", () => {
    clearGrid();
    let input = prompt("Enter how many squares you want the new grid to be (minimum of 16, maximum of 64)", "");
    if (input >= 16 && input <= 64) {
        let gridNum = parseInt(input);
        drawGrid(gridNum);
    } else {
        alert("Invalid input, try again");
    };
});

drawGrid(32)