const homes = [
    { id: 1, name: "Cozy Corner", city: "Astana", rent: 190000 },
    { id: 2, name: "Blue Horizon", city: "Almaty", rent: 280000 }
];

const shortlistForm = document.querySelector("#shortlist-form");
const tableBody = document.querySelector("#shortlist-body");
const statusText = document.querySelector("#shortlist-status");
let nextId = 3;
let editingId = null;

function makeButton(label, action) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn outline-button me-2 mb-1";
    button.textContent = label;
    button.addEventListener("click", action);
    return button;
}

function makeInput(type, value, label) {
    const input = document.createElement("input");
    input.type = type;
    input.value = value;
    input.required = true;
    input.className = "form-control";
    input.setAttribute("aria-label", label);
    return input;
}

function editRow(row, home) {
    const name = makeInput("text", home.name, "Apartment name");
    name.maxLength = 80;

    const city = document.createElement("select");
    city.className = "form-select";
    city.setAttribute("aria-label", "City");
    city.add(new Option("Almaty", "Almaty"));
    city.add(new Option("Astana", "Astana"));
    city.value = home.city;

    const rent = makeInput("number", home.rent, "Monthly rent");
    rent.min = "1";
    rent.step = "1";

    row.insertCell().appendChild(name);
    row.insertCell().appendChild(city);
    row.insertCell().appendChild(rent);

    const actions = row.insertCell();

    actions.appendChild(makeButton("Save", function () {
        if (name.value.trim() === "") {
            statusText.textContent = "Enter an apartment name.";
            name.focus();
            return;
        }

        if (!rent.reportValidity()) {
            return;
        }

        home.name = name.value.trim();
        home.city = city.value;
        home.rent = Number(rent.value);
        editingId = null;
        statusText.textContent = home.name + " was updated.";
        renderTable();
    }));

    actions.appendChild(makeButton("Cancel", function () {
        editingId = null;
        statusText.textContent = "Edit cancelled.";
        renderTable();
    }));
}

function renderTable() {
    tableBody.textContent = "";
    shortlistForm.querySelector("button[type='submit']").disabled = editingId !== null;

    if (homes.length === 0) {
        const cell = tableBody.insertRow().insertCell();
        cell.colSpan = 4;
        cell.textContent = "Your shortlist is empty.";
        return;
    }

    homes.forEach(function (home) {
        const row = tableBody.insertRow();

        if (home.id === editingId) {
            editRow(row, home);
            return;
        }

        row.insertCell().textContent = home.name;
        row.insertCell().textContent = home.city;
        row.insertCell().textContent = home.rent.toLocaleString("en-US") + " ₸";

        const actions = row.insertCell();

        const edit = makeButton("Edit", function () {
            editingId = home.id;
            statusText.textContent = "Edit the selected row.";
            renderTable();
            tableBody.querySelector("input").focus();
        });

        const remove = makeButton("Delete", function () {
            if (!window.confirm("Remove " + home.name + " from your shortlist?")) {
                return;
            }

            const index = homes.findIndex(function (item) {
                return item.id === home.id;
            });

            homes.splice(index, 1);
            statusText.textContent = home.name + " was removed.";
            renderTable();
        });

        edit.disabled = editingId !== null;
        remove.disabled = editingId !== null;
        actions.append(edit, remove);
    });
}

shortlistForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.querySelector("#home-name");
    const name = nameInput.value.trim();

    if (name === "") {
        statusText.textContent = "Enter an apartment name.";
        nameInput.focus();
        return;
    }

    homes.push({
        id: nextId,
        name: name,
        city: document.querySelector("#home-city").value,
        rent: Number(document.querySelector("#home-rent").value)
    });

    nextId++;
    renderTable();
    shortlistForm.reset();
    statusText.textContent = name + " was added.";
});

renderTable();