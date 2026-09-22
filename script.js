// ================================
// AREA TULISAN
// ================================
const display = document.getElementById("display");

// ================================
// TOMBOL HURUF
// ================================
const tombolHuruf = document.querySelectorAll(".row:not(.special) button");

tombolHuruf.forEach(function (tombol) {
    tombol.addEventListener("click", function () {
        const huruf = tombol.textContent.trim();

        display.value += huruf;
    });
});

// ================================
// TOMBOL HAPUS
// ================================
document.getElementById("backspace").addEventListener("click", function () {
    display.value = display.value.slice(0, -1);
});

// ================================
// TOMBOL SPASI
// ================================
document.getElementById("space").addEventListener("click", function () {
    display.value += " ";
});

// ================================
// TOMBOL ENTER
// ================================
document.getElementById("enter").addEventListener("click", function () {
    display.value += "\n";
});

// ================================
// TOMBOL BERSIHKAN
// ================================
document.getElementById("clear").addEventListener("click", function () {
    display.value = "";
});

// ================================
// BLOKIR KEYBOARD FISIK
// ================================
document.addEventListener("keydown", function (event) {
    event.preventDefault();
});
