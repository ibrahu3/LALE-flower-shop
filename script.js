let total = 0;

function showOrganizing() {
    document.getElementById("organizingSection").style.display = "flex";
}

const bouquetArea = document.getElementById("bouquetArea");

bouquetArea.addEventListener("dragover", function(event) {
    event.preventDefault();
});

bouquetArea.addEventListener("drop", function(event) {
    event.preventDefault();

    const flowerId = event.dataTransfer.getData("text");

    const originalFlower = document.getElementById(flowerId);

    const newFlower = document.createElement("img");

    newFlower.src = originalFlower.src;
    newFlower.className = "added-flower";

    const rect = bouquetArea.getBoundingClientRect();

    const x = event.clientX - rect.left - 40;
    const y = event.clientY - rect.top - 40;

    newFlower.style.left = x + "px";
    newFlower.style.top = y + "px";

    bouquetArea.appendChild(newFlower);

    total += 10;

    document.getElementById("totalPrice").innerText = total;
});

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}