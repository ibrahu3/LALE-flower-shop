let total = 0;

function showOrganizing() {
    document.getElementById("organizingSection").style.display = "flex";
}

function addFlower(flowerImage) {
    const bouquetArea = document.getElementById("bouquetArea");

    const newFlower = document.createElement("img");
    newFlower.src = flowerImage;
    newFlower.className = "added-flower";

    const randomX = 180 + Math.random() * 220;
    const randomY = 260 + Math.random() * 90;

    newFlower.style.left = randomX + "px";
    newFlower.style.top = randomY + "px";

    bouquetArea.appendChild(newFlower);

    total = total + 10;
    document.getElementById("totalPrice").innerText = total;
}