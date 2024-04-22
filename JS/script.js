let button = document.querySelector(".button");
let table = document.querySelector(".container");

button.addEventListener("click", () => {
    table.classList.toggle("tableNone");


if (table.classList.contains("tableNone")) {
    button.innerHTML = "<span>Pokaż tabelę</span>";
} else {
    button.innerHTML = "<span>Schowaj tabele</span>";
}

});