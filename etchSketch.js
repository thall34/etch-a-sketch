function drawGrid (size) {
    const gridContainer = document.getElementById("container");

    for (let i = 0; i < size; i++) {
        const rowItem = document.createElement("div");
        rowItem.className = "row-item";
        for (let j = 0; j < size; j++) {
            const colItem = document.createElement("div");
            colItem.className = "col-item";
            rowItem.appendChild(colItem);  
        };
        gridContainer.appendChild(rowItem);
    };
};

function clearGrid () {
    const rowsRemove = document.querySelectorAll(".row-item");
    rowsRemove.forEach(row => {
        row.remove();
    });
}

function sketchpad () {
    let boxes = document.querySelectorAll(".col-item");

    for (let i = 0; i < boxes.length; i++) {
        const box = boxes [i];

        box.addEventListener("mouseover", () => {
        box.className = "col-item-fill";
        });
    };
}

const resetButton = document.querySelector("#reset")
    resetButton.addEventListener("click", () => {
        clearGrid ();
            let input = prompt("Enter how many squares you want the new grid to be (minimum of 16, maximum of 100)", "");
            if (input > 15 && input < 101) {
                let gridNum = parseInt(input);
                drawGrid (gridNum);
                sketchpad ();
            } else {
                alert("Invalid input, try again");
            }
    });