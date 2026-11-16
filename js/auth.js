(() => {
    const storageKey = "qonys-session";

    const form = document.querySelector("#signin-form");
    const panel = document.querySelector("#signed-in-panel");
    const nameInput = document.querySelector("#signin-name");
    const emailInput = document.querySelector("#signin-email");
    const greeting = document.querySelector("#signed-in-name");
    const signoutButton = document.querySelector("#signout-button");
    const status = document.querySelector("#signin-status");

    form.noValidate = true;

    function readSession() {
        try {
            const saved = JSON.parse(localStorage.getItem(storageKey));

            if (
                saved &&
                saved.signedIn === true &&
                typeof saved.name === "string" &&
                saved.name.trim().length >= 2 &&
                saved.name.length <= 40
            ) {
                return saved;
            }
        } catch (error) {

        }

        return null;
    }

    let user = readSession();

    function render() {
        form.hidden = Boolean(user);
        panel.hidden = !user;
        greeting.textContent = user ? user.name : "";
    }

    function validate(input) {
        const value = input.value.trim();
        let error = "";

        if (value === "") {
            error = "This field is required.";
        } else if (input === nameInput && (value.length < 2 || value.length > 40)) {
            error = "Use a display name with 2 to 40 characters.";
        } else if (input === emailInput && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || value.length > 254)) {
            error = "Enter an email such as student@example.com.";
        }

        input.classList.toggle("is-invalid", error !== "");
        input.setAttribute("aria-invalid", String(error !== ""));
        document.getElementById(input.id + "-error").textContent = error;

        return error === "";
    }

    const inputs = [nameInput, emailInput];

    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            validate(input);
            status.textContent = "";
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const invalidInputs = inputs.filter((input) => !validate(input));

        if (invalidInputs.length > 0) {
            status.textContent = "Please correct the marked fields.";
            invalidInputs[0].focus();
            return;
        }

        const session = {
            signedIn: true,
            name: nameInput.value.trim()
        };

        try {
            localStorage.setItem(storageKey, JSON.stringify(session));
        } catch (error) {
            status.textContent = "Sign-in could not be saved. Allow browser storage and try again.";
            return;
        }

        user = session;
        form.reset();

        inputs.forEach((input) => {
            input.classList.remove("is-invalid");
            input.removeAttribute("aria-invalid");
            document.getElementById(input.id + "-error").textContent = "";
        });

        render();
        status.textContent = "You are signed in on this browser.";
        signoutButton.focus();
    });

    signoutButton.addEventListener("click", () => {
        try {
            localStorage.removeItem(storageKey);
        } catch (error) {
            status.textContent = "Could not clear the saved sign-in. Allow browser storage and try again.";
            return;
        }

        user = null;
        render();

        status.textContent = "You are signed out.";
        nameInput.focus();
    });

    window.addEventListener("storage", (event) => {
        if (event.key === storageKey || event.key === null) {
            user = readSession();
            render();
            status.textContent = "Sign-in state updated from another tab.";
        }
    });

    render();
})();