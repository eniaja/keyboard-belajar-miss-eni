const display = document.getElementById("display");

let capsLock = false;
let shift = false;


/* =====================================
   TOMBOL HURUF DAN SIMBOL
===================================== */

const tombolKarakter = document.querySelectorAll(
    "[data-normal]"
);

tombolKarakter.forEach(function (tombol) {

    tombol.addEventListener("click", function () {

        const normal = tombol.getAttribute("data-normal");
        const shiftValue = tombol.getAttribute("data-shift");

        let karakter;

        if (shift || capsLock) {
            karakter = shiftValue;
        } else {
            karakter = normal;
        }

        display.value += karakter;

        /* SHIFT hanya berlaku untuk satu huruf/simbol */
        if (shift) {
            shift = false;

            document.getElementById("shiftLeft")
                .classList.remove("active");

            document.getElementById("shiftRight")
                .classList.remove("active");
        }
    });

});


/* =====================================
   CAPS LOCK
===================================== */

document.getElementById("caps").addEventListener("click", function () {

    capsLock = !capsLock;

    this.classList.toggle("active");

});


/* =====================================
   SHIFT KIRI
===================================== */

document.getElementById("shiftLeft").addEventListener("click", function () {

    shift = !shift;

    this.classList.toggle("active");

    document.getElementById("shiftRight")
        .classList.toggle("active", shift);

});


/* =====================================
   SHIFT KANAN
===================================== */

document.getElementById("shiftRight").addEventListener("click", function () {

    shift = !shift;

    this.classList.toggle("active");

    document.getElementById("shiftLeft")
        .classList.toggle("active", shift);

});


/* =====================================
   BACKSPACE
===================================== */

document.getElementById("backspace").addEventListener("click", function () {

    display.value = display.value.slice(0, -1);

});


/* =====================================
   SPACE
===================================== */

document.getElementById("space").addEventListener("click", function () {

    display.value += " ";

});


/* =====================================
   ENTER
===================================== */

document.getElementById("enter").addEventListener("click", function () {

    display.value += "\n";

});


/* =====================================
   TAB
===================================== */

document.getElementById("tab").addEventListener("click", function () {

    display.value += "    ";

});


/* =====================================
   TOMBOL PANAH
===================================== */

document.getElementById("left").addEventListener("click", function () {

    display.value += "←";

});

document.getElementById("up").addEventListener("click", function () {

    display.value += "↑";

});

document.getElementById("down").addEventListener("click", function () {

    display.value += "↓";

});

document.getElementById("right").addEventListener("click", function () {

    display.value += "→";

});


/* =====================================
   BERSIHKAN
===================================== */

document.getElementById("clear").addEventListener("click", function () {

    display.value = "";

});


/* =====================================
   BLOKIR KEYBOARD FISIK
===================================== */

document.addEventListener("keydown", function (event) {

    event.preventDefault();

});


/* =====================================
   MENCEGAH KEYBOARD HP
===================================== */

display.addEventListener("focus", function () {

    display.blur();

});
