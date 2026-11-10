const searchBox = document.querySelector("#apartment-search");
const cards = document.querySelectorAll(".apartment-card");
const cityButtons = document.querySelectorAll("#city-filters button");
const searchResult = document.querySelector("#search-result");

let selectedCity = "all";

function filterApartments() {
    const search = searchBox.value.trim().toLowerCase();
    let count = 0;

    cards.forEach(function (card) {
        const name = card.querySelector("h2").textContent;
        const location = card.querySelector(".location").textContent;
        const words = (name + " " + location).toLowerCase();
        const city = card.dataset.city.toLowerCase();

        const matchesText = words.includes(search);
        const matchesCity = selectedCity === "all" || city === selectedCity;
        const visible = matchesText && matchesCity;

        card.classList.toggle("d-none", !visible);

        if (visible) {
            count++;
        }
    });

    if (count === 0) {
        searchResult.textContent = "No apartments found. Try another city or name.";
    } else if (count === 1) {
        searchResult.textContent = "1 apartment found.";
    } else {
        searchResult.textContent = count + " apartments found.";
    }
}

searchBox.addEventListener("input", filterApartments);

cityButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedCity = button.dataset.city;

        cityButtons.forEach(function (item) {
            const active = item === button;
            item.setAttribute("aria-pressed", String(active));
            item.classList.toggle("main-button", active);
            item.classList.toggle("outline-button", !active);
        });

        filterApartments();
    });
});