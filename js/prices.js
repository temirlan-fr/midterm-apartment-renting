const homes = [
    { id: 1, name: "Cozy Corner", city: "Astana", rent: 190000 },
    { id: 2, name: "Blue Horizon", city: "Almaty", rent: 280000 }
];

const shortlistForm = document.querySelector("#shortlist-form");
const tableBody = document.querySelector("#shortlist-body");
const statusText = document.querySelector("#shortlist-status");
let nextId = 3;

function renderTable() {
    tableBody.textContent = "";

    homes.forEach(function (home) {
        const row = tableBody.insertRow();
        row.insertCell().textContent = home.name;
        row.insertCell().textContent = home.city;
        row.insertCell().textContent = home.rent.toLocaleString("en-US") + " ₸";
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