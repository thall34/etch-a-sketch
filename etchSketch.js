function drawGrid (size) {
    const gridContainer = document.getElementById("container")

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

drawGrid (16);

let boxes = document.querySelectorAll(".col-item");

    for (let i = 0; i < boxes.length; i++) {
        const box = boxes [i];

        box.addEventListener("mouseover", (e) => {
        box.className = "col-item-fill";
        });
    };