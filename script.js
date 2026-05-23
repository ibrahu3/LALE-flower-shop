let total = 0;

function showOrganizing() {
    document.getElementById("organizingSection").style.display = "flex";
}

function addFlower(flowerImage) {
    const bouquetArea = document.getElementById("bouquetArea");

    const newFlower = document.createElement("img");
    newFlower.src = flowerImage;
    newFlower.className = "added-flower";

    const randomX = 230 + Math.random() * 100;
    const randomY = 180 + Math.random() * 120;

    newFlower.style.left = randomX + "px";
    newFlower.style.top = randomY + "px";

    bouquetArea.appendChild(newFlower);

    total = total + 10;
    document.getElementById("totalPrice").innerText = total;
}