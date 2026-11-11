// Contact page: validate the practice registration form.
const registrationForm = document.querySelector("#registration");

if (registrationForm) {
    const nameInput = document.querySelector("#reg-name");
    const emailInput = document.querySelector("#reg-email");
    const passwordInput = document.querySelector("#reg-password");
    const confirmInput = document.querySelector("#reg-confirm");
    const messageInput = document.querySelector("#reg-message");
    const strength = document.querySelector("#password-strength");
    const result = document.querySelector("#registration-note");
    const emailPattern = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;
    const fields = [nameInput, emailInput, passwordInput, confirmInput, messageInput];

    function validPassword(password) {
        return password.trim().length >= 8 && /[a-z]/i.test(password) && /\d/.test(password);
    }

    function updateStrength() {
        const password = passwordInput.value;
        strength.className = "password-strength";

        if (!password) {
            strength.textContent = "";
        } else if (!validPassword(password)) {
            strength.textContent = "Password strength: Weak";
            strength.classList.add("text-danger");
        } else if (password.length >= 12 && /[A-Z]/.test(password)
            && /[a-z]/.test(password) && /[^a-z\d\s]/i.test(password)) {
            strength.textContent = "Password strength: Strong";
            strength.classList.add("text-success");
        } else {
            strength.textContent = "Password strength: Medium";
            strength.classList.add("text-warning-emphasis");
        }
    }

    function validateField(field) {
        let error = "";
        if (!field.value.trim()) {
            error = "Please fill in this field.";
        } else if (field === emailInput && !emailPattern.test(field.value.trim())) {
            error = "Enter an email like name@example.com.";
        } else if (field === passwordInput && !validPassword(field.value)) {
            error = "Use at least 8 characters with a letter and a number.";
        } else if (field === confirmInput && field.value !== passwordInput.value) {
            error = "The passwords must match.";
        }

        field.classList.toggle("is-invalid", Boolean(error));
        field.classList.toggle("is-valid", !error);
        field.setAttribute("aria-invalid", String(Boolean(error)));
        document.getElementById(field.id + "-feedback").textContent = error;
        return !error;
    }

    registrationForm.addEventListener("input", function (event) {
        validateField(event.target);
        updateStrength();
        if (event.target === passwordInput && confirmInput.value) {
            validateField(confirmInput);
        }
        result.className = "mt-3";
        result.textContent = "Practice form. No account or booking is created.";
    });

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const invalidFields = fields.filter(function (field) {
            return !validateField(field);
        });
        updateStrength();

        if (invalidFields.length) {
            result.className = "alert alert-danger mt-3 mb-0";
            result.textContent = "Please correct the highlighted fields.";
            invalidFields[0].focus();
            return;
        }

        registrationForm.reset();
        fields.forEach(function (field) {
            field.classList.remove("is-valid", "is-invalid");
            field.removeAttribute("aria-invalid");
        });
        updateStrength();
        result.className = "alert alert-success mt-3 mb-0";
        result.textContent = "Registration details passed validation.";
    });
}

// Apartments page: combine a live text search with the selected city.
const searchBox = document.querySelector("#apartment-search");

if (searchBox) {
    const listings = document.querySelectorAll(".listing");
    const cityButtons = document.querySelectorAll(".city-filter");
    const searchResult = document.querySelector("#search-results");
    let selectedCity = "all";

    function filterApartments() {
        const search = searchBox.value.trim().toLowerCase();
        let count = 0;

        listings.forEach(function (listing) {
            const name = listing.querySelector("h2").textContent;
            const location = listing.querySelector(".location").textContent;
            const words = (name + " " + location).toLowerCase();
            const matchesText = words.includes(search);
            const matchesCity = selectedCity === "all" || listing.dataset.city === selectedCity;
            const visible = matchesText && matchesCity;
            listing.hidden = !visible;

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
    filterApartments();

    // Use jQuery to fade the lightbox in and out.
    const lightbox = document.querySelector("#lightbox");
    const photo = document.querySelector("#large-photo");
    const caption = document.querySelector("#photo-caption");
    const previousButton = document.querySelector("#previous-photo");
    const nextButton = document.querySelector("#next-photo");
    const fadeTime = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180;
    let gallery = [];
    let photoIndex = 0;

    function showPhoto() {
        const thumbnail = gallery[photoIndex].querySelector("img");
        photo.src = thumbnail.getAttribute("src");
        photo.alt = thumbnail.alt;
        caption.textContent = thumbnail.alt + " (" + (photoIndex + 1) + " of " + gallery.length + ")";
    }

    function movePhoto(step) {
        photoIndex = (photoIndex + step + gallery.length) % gallery.length;
        showPhoto();
    }

    function closeLightbox() {
        $("#lightbox-content").stop(true, false).fadeOut(fadeTime, function () {
            lightbox.close();
        });
    }

    document.querySelectorAll(".gallery-photo").forEach(function (button) {
        button.addEventListener("click", function () {
            gallery = Array.from(document.querySelectorAll(".listing:not([hidden]) .gallery-photo"));
            photoIndex = gallery.indexOf(button);
            previousButton.disabled = gallery.length < 2;
            nextButton.disabled = gallery.length < 2;
            showPhoto();
            lightbox.showModal();
            $("#lightbox-content").hide().fadeIn(fadeTime, function () {
                document.querySelector("#close-photo").focus();
            });
        });
    });

    previousButton.addEventListener("click", function () { movePhoto(-1); });
    nextButton.addEventListener("click", function () { movePhoto(1); });
    document.querySelector("#close-photo").addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
    lightbox.addEventListener("cancel", function (event) {
        event.preventDefault();
        closeLightbox();
    });
    lightbox.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            movePhoto(-1);
        } else if (event.key === "ArrowRight") {
            movePhoto(1);
        }
    });
}

// Prices page: create, read, update and delete price records.
const priceForm = document.querySelector("#price-form");

if (priceForm) {
    const rows = document.querySelector("#price-rows");
    const heading = document.querySelector("#price-form-heading");
    const saveButton = document.querySelector("#save-price");
    const cancelButton = document.querySelector("#cancel-edit");
    const status = document.querySelector("#price-result");
    const apartmentInput = priceForm.elements.namedItem("apartment");
    const storageKey = "qonys-price-records";
    const formatNumber = new Intl.NumberFormat("en-US");
    let editingIndex = -1;
    let records = [
        { apartment: "Blue Horizon", city: "Almaty", rooms: 2, area: 65, rent: 280000, deposit: 280000 },
        { apartment: "Cozy Corner", city: "Astana", rooms: 1, area: 42, rent: 190000, deposit: 190000 },
        { apartment: "Sunlit Home", city: "Almaty", rooms: 3, area: 88, rent: 380000, deposit: 380000 }
    ];

    try {
        const saved = JSON.parse(localStorage.getItem(storageKey));
        if (Array.isArray(saved)) {
            records = saved;
        }
    } catch {
        status.textContent = "Saved records could not be loaded. Showing sample prices.";
    }

    function updateTable(message) {
        renderRecords();
        try {
            localStorage.setItem(storageKey, JSON.stringify(records));
            status.textContent = message;
        } catch {
            status.textContent = message + " This browser could not save the changes.";
        }
    }

    function resetPriceForm() {
        editingIndex = -1;
        priceForm.reset();
        apartmentInput.setCustomValidity("");
        heading.textContent = "Add a price record";
        saveButton.textContent = "Add record";
        cancelButton.hidden = true;
    }

    function editRecord(index) {
        editingIndex = index;
        for (const field of Object.keys(records[index])) {
            priceForm.elements.namedItem(field).value = records[index][field];
        }
        apartmentInput.setCustomValidity("");
        heading.textContent = "Edit price record";
        saveButton.textContent = "Save changes";
        cancelButton.hidden = false;
        status.textContent = "";
        apartmentInput.focus();
    }

    function deleteRecord(index) {
        if (!window.confirm("Delete the price record for " + records[index].apartment + "?")) {
            return;
        }

        records.splice(index, 1);
        if (editingIndex === index) {
            resetPriceForm();
        } else if (editingIndex > index) {
            editingIndex--;
        }
        updateTable("Record deleted.");
        if (editingIndex < 0) {
            apartmentInput.focus();
        }
    }

    function renderRecords() {
        rows.replaceChildren();

        if (records.length === 0) {
            const cell = rows.insertRow().insertCell();
            cell.colSpan = 7;
            cell.textContent = "No price records yet. Add one using the form.";
        }

        records.forEach(function (record, index) {
            const row = rows.insertRow();
            const nameCell = document.createElement("th");
            nameCell.scope = "row";
            nameCell.textContent = record.apartment;
            row.append(nameCell);

            const values = [
                record.city,
                record.rooms,
                formatNumber.format(record.area) + " m²",
                formatNumber.format(record.rent) + " ₸",
                formatNumber.format(record.deposit) + " ₸"
            ];
            values.forEach(function (value) {
                row.insertCell().textContent = value;
            });

            const actions = row.insertCell();
            actions.className = "text-nowrap";
            const editButton = document.createElement("button");
            editButton.type = "button";
            editButton.className = "btn btn-sm btn-outline-dark me-2";
            editButton.textContent = "Edit";
            editButton.setAttribute("aria-label", "Edit " + record.apartment);
            editButton.addEventListener("click", function () { editRecord(index); });

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.className = "btn btn-sm btn-outline-danger";
            deleteButton.textContent = "Delete";
            deleteButton.setAttribute("aria-label", "Delete " + record.apartment);
            deleteButton.addEventListener("click", function () { deleteRecord(index); });

            actions.append(editButton, deleteButton);
        });
    }

    apartmentInput.addEventListener("input", function () {
        apartmentInput.setCustomValidity("");
    });

    priceForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(priceForm);
        const apartment = formData.get("apartment").trim();

        if (!apartment) {
            apartmentInput.setCustomValidity("Enter an apartment name.");
            apartmentInput.reportValidity();
            return;
        }

        const record = {
            apartment: apartment,
            city: formData.get("city"),
            rooms: Number(formData.get("rooms")),
            area: Number(formData.get("area")),
            rent: Number(formData.get("rent")),
            deposit: Number(formData.get("deposit"))
        };

        if (editingIndex === -1) {
            records.push(record);
            updateTable("Record added.");
        } else {
            records[editingIndex] = record;
            updateTable("Record updated.");
        }
        resetPriceForm();
    });

    cancelButton.addEventListener("click", function () {
        resetPriceForm();
        status.textContent = "Edit cancelled.";
        apartmentInput.focus();
    });

    renderRecords();
}
