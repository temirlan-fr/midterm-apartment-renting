const registration = document.querySelector("#registration");
const fields = registration.querySelectorAll("input, textarea");
const password = document.querySelector("#reg-password");
const confirmation = document.querySelector("#reg-confirm");
const result = document.querySelector("#registration-note");

registration.noValidate = true;

function getStrength(value) {
    if (value === "") {
        return 0;
    }

    if (value.length >= 10 && /[a-z]/.test(value) && /[A-Z]/.test(value) && /[0-9]/.test(value)) {
        return 3;
    }

    if (value.length >= 8 && /[a-zA-Z]/.test(value) && /[0-9]/.test(value)) {
        return 2;
    }

    return 1;
}

function updateMeter() {
    const level = getStrength(password.value);
    const labels = ["Not entered", "Weak", "Medium", "Strong"];

    document.querySelector("#strength-meter").value = level;
    document.querySelector("#strength-text").textContent = labels[level];
}

function checkField(field) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const feedback = document.getElementById(field.id + "-feedback");
    let error = "";

    if (field.value.trim() === "") {
        error = "This field is required.";
    } else if (field.id === "reg-email" && !emailPattern.test(field.value.trim())) {
        error = "Enter an email such as name@example.com.";
    } else if (field === password && getStrength(field.value) < 2) {
        error = "Use at least 8 characters with a letter and a number.";
    } else if (field === confirmation && field.value !== password.value) {
        error = "The passwords do not match.";
    }

    const valid = error === "";

    field.classList.toggle("is-valid", valid);
    field.classList.toggle("is-invalid", !valid);
    field.setAttribute("aria-invalid", String(!valid));
    feedback.textContent = valid ? "Looks good." : error;
    feedback.className = valid ? "d-block text-success" : "d-block text-danger";

    return valid;
}

fields.forEach(function (field) {
    const feedback = document.createElement("small");
    feedback.id = field.id + "-feedback";
    feedback.setAttribute("aria-live", "polite");
    field.parentElement.appendChild(feedback);
    field.setAttribute("aria-describedby", feedback.id);

    field.addEventListener("input", function () {
        result.textContent = "";
        checkField(field);

        if (field === password) {
            updateMeter();

            if (confirmation.value !== "") {
                checkField(confirmation);
            }
        }
    });
});

registration.addEventListener("submit", function (event) {
    event.preventDefault();

    let firstInvalid = null;

    fields.forEach(function (field) {
        if (!checkField(field) && firstInvalid === null) {
            firstInvalid = field;
        }
    });

    if (firstInvalid !== null) {
        result.textContent = "Please correct the marked fields.";
        firstInvalid.focus();
        return;
    }

    registration.reset();
    updateMeter();

    fields.forEach(function (field) {
        field.classList.remove("is-valid", "is-invalid");
        field.removeAttribute("aria-invalid");
        document.getElementById(field.id + "-feedback").textContent = "";
    });

    result.textContent = "Registration checks passed. No account or password was saved.";
});