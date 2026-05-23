function showOrganizing() {
    document.getElementById("organizingSection").style.display = "flex";
}

function addFlower(flowerImage) {
    const bouquetArea = document.getElementById("bouquetArea");

    const newFlower = document.createElement("img");
    newFlower.src = flowerImage;
    newFlower.className = "added-flower";

    const randomX = 220 + Math.random() * 120;
    const randomY = 170 + Math.random() * 120;

    newFlower.style.left = randomX + "px";
    newFlower.style.top = randomY + "px";

    bouquetArea.appendChild(newFlower);
}