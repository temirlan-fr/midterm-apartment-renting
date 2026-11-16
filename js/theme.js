(() => {
    const storageKey = "qonys-theme";
    const root = document.documentElement;

    let theme = "light";

    try {
        if (localStorage.getItem(storageKey) === "dark") {
            theme = "dark";
        }
    } catch (error) {
        theme = "light";
    }

    root.dataset.theme = theme;

    document.addEventListener("DOMContentLoaded", () => {
        const header = document.querySelector(".header-content");

        const controls = document.createElement("div");
        controls.className = "theme-controls";

        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn main-button";

        const notice = document.createElement("small");
        notice.setAttribute("role", "status");

        controls.append(button, notice);
        header.append(controls);

        function updateButton() {
            const dark = root.dataset.theme === "dark";

            button.textContent = dark ? "Light theme" : "Dark theme";
            button.setAttribute("aria-pressed", String(dark));
            button.setAttribute("aria-label", "Dark theme");
        }

        updateButton();

        button.addEventListener("click", () => {
            const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

            root.dataset.theme = nextTheme;
            updateButton();

            try {
                localStorage.setItem(storageKey, nextTheme);
                notice.textContent = "";
            } catch (error) {
                notice.textContent = "Theme changed, but browser storage is unavailable.";
            }
        });

        window.addEventListener("storage", (event) => {
            if (event.key === storageKey || event.key === null) {
                root.dataset.theme = event.newValue === "dark" ? "dark" : "light";
                updateButton();
            }
        });
    });
})();