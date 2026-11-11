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
        selectedCity = button.dataset.city.toLowerCase();

        cityButtons.forEach(function (item) {
            const active = item === button;

            item.setAttribute("aria-pressed", String(active));
            item.classList.toggle("main-button", active);
            item.classList.toggle("outline-button", !active);
        });

        filterApartments();
    });
});

filterApartments();

if (window.jQuery) {
    const photos = $(".gallery-photo");
    const viewer = document.querySelector("#photo-viewer");
    const panel = $("#photo-panel");
    const largePhoto = $("#large-photo");

    let currentPhoto = 0;
    let closing = false;

    function displayPhoto() {
        const selectedPhoto = photos.eq(currentPhoto);
        const thumbnail = selectedPhoto.find("img");

        largePhoto.attr("src", thumbnail.attr("src"));
        largePhoto.attr("alt", thumbnail.attr("alt"));

        $("#photo-title").text(
            selectedPhoto.attr("data-title") +
            " (" + (currentPhoto + 1) + "/" + photos.length + ")"
        );
    }

    function changePhoto(direction) {
        if (closing || largePhoto.is(":animated") || panel.is(":animated")) {
            return;
        }

        currentPhoto = (currentPhoto + direction + photos.length) % photos.length;

        largePhoto.fadeOut(120, function () {
            displayPhoto();
            largePhoto.fadeIn(160);
        });
    }

    function closeViewer() {
        if (closing) {
            return;
        }

        closing = true;

        panel.stop(true, true).fadeOut(120, function () {
            viewer.close();
            closing = false;
        });
    }

    photos.on("click", function (event) {
        event.preventDefault();

        currentPhoto = photos.index(this);
        closing = false;

        largePhoto.stop(true, true).show();
        displayPhoto();

        viewer.showModal();
        panel.stop(true, true).hide().fadeIn(160);
        $("#close-photo").trigger("focus");
    });

    $("#previous-photo").on("click", function () {
        changePhoto(-1);
    });

    $("#next-photo").on("click", function () {
        changePhoto(1);
    });

    $("#close-photo").on("click", closeViewer);

    viewer.addEventListener("cancel", function (event) {
        event.preventDefault();
        closeViewer();
    });

    viewer.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            changePhoto(-1);
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();
            changePhoto(1);
        }
    });
}