const display = document.getElementById("display");
const buttons = document.querySelectorAll(".row button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        const key = this.textContent.trim();

        if (key === "⌫ Hapus") {
            display.value = display.value.slice(0, -1);
        }

        else if (key === "SPACE") {
            display.value += " ";
        }

        else if (key === "ENTER") {
            display.value += "\n";
        }

        else {
            display.value += key;
        }

        display.focus();
    });

});

document.getElementById("clear").addEventListener("click", function () {
    display.value = "";
    display.focus();
});