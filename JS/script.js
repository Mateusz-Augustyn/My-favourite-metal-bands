{
    const toggleTableVisibility = () => {

        const table = document.querySelector(".js-container");
        const button = document.querySelector(".js-button");
        table.classList.toggle("tableNone");
        button.innerText = table.classList.contains("tableNone") ? "Pokaż tabelę" : "Schowaj tabele";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleTableVisibility);
    };

    init();
}
