(() => {
    const cities = {
        almaty: {
            name: "Almaty",
            latitude: 43.2389,
            longitude: 76.8897
        },
        astana: {
            name: "Astana",
            latitude: 51.1694,
            longitude: 71.4491
        }
    };

    const form = document.querySelector("#weather-form");
    const citySelect = document.querySelector("#weather-city");
    const status = document.querySelector("#weather-status");
    const result = document.querySelector("#weather-result");
    const button = form.querySelector("button");

    let controller;
    let requestNumber = 0;

    function getWeatherDescription(code) {
        if (code === 0) return "Clear sky";
        if ([1, 2, 3].includes(code)) return "Partly cloudy or overcast";
        if ([45, 48].includes(code)) return "Fog";
        if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
        if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "Rain";
        if ([71, 73, 75, 77, 85, 86].includes(code)) return "Snow";
        if ([95, 96, 99].includes(code)) return "Thunderstorm";

        return "Conditions unavailable";
    }

    function validateForecast(daily) {
        if (!daily || !Array.isArray(daily.time) || daily.time.length < 3) {
            return false;
        }

        const validDates = daily.time.slice(0, 3).every((date) => {
            return typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date);
        });

        if (!validDates) return false;

        const fields = [
            "temperature_2m_min",
            "temperature_2m_max",
            "precipitation_probability_max",
            "weather_code"
        ];

        return fields.every((field) => {
            return Array.isArray(daily[field]) &&
                daily[field].length >= 3 &&
                daily[field].slice(0, 3).every(Number.isFinite);
        });
    }

    function renderForecast(daily) {
        const fragment = document.createDocumentFragment();

        for (let index = 0; index < 3; index++) {
            const column = document.createElement("div");
            column.className = "col-md-4";

            const card = document.createElement("article");
            card.className = "feature-card weather-card";

            const heading = document.createElement("h3");
            const date = new Date(daily.time[index] + "T12:00:00");

            heading.textContent = date.toLocaleDateString("en-GB", {
                weekday: "short",
                day: "numeric",
                month: "short"
            });

            const temperature = document.createElement("p");
            temperature.className = "weather-temperature";

            const minimum = Math.round(daily.temperature_2m_min[index]);
            const maximum = Math.round(daily.temperature_2m_max[index]);

            temperature.textContent = minimum + " to " + maximum + " °C";

            const description = document.createElement("p");
            description.className = "weather-description";
            description.textContent = getWeatherDescription(daily.weather_code[index]);

            const precipitation = document.createElement("p");
            precipitation.className = "weather-precipitation";
            precipitation.textContent = "Precipitation chance: " + daily.precipitation_probability_max[index] + "%";

            card.append(heading, temperature, description, precipitation);
            column.append(card);
            fragment.append(column);
        }

        result.replaceChildren(fragment);
        result.hidden = false;
    }

    async function loadWeather() {
        const city = cities[citySelect.value];

        if (!city) return;

        const currentRequest = ++requestNumber;

        if (controller) controller.abort();

        controller = new AbortController();
        const activeController = controller;

        const timeout = setTimeout(() => {
            activeController.abort();
        }, 12000);

        result.hidden = true;
        result.replaceChildren();

        status.textContent = "Loading forecast for " + city.name + "…";
        button.disabled = true;
        button.textContent = "Loading…";
        form.setAttribute("aria-busy", "true");

        const params = new URLSearchParams({
            latitude: city.latitude,
            longitude: city.longitude,
            daily: "temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code",
            timezone: "Asia/Almaty",
            forecast_days: "3"
        });

        try {
            const response = await fetch("https://api.open-meteo.com/v1/forecast?" + params, {
                signal: activeController.signal
            });

            if (!response.ok) {
                throw new Error("HTTP error: " + response.status);
            }

            const data = await response.json();

            if (!validateForecast(data.daily)) {
                throw new Error("Incomplete forecast data");
            }

            if (currentRequest !== requestNumber) return;

            renderForecast(data.daily);
            status.textContent = "3-day forecast for " + city.name + ". Local dates: UTC+5.";
        } catch (error) {
            if (currentRequest !== requestNumber) return;

            if (error.name === "AbortError") {
                status.textContent = "The request took too long. Select Refresh forecast to try again.";
            } else {
                status.textContent = "Forecast unavailable. Check your connection and select Refresh forecast.";
            }
        } finally {
            clearTimeout(timeout);

            if (currentRequest === requestNumber) {
                button.disabled = false;
                button.textContent = "Refresh forecast";
                form.removeAttribute("aria-busy");
            }
        }
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        loadWeather();
    });

    citySelect.addEventListener("change", loadWeather);

    loadWeather();
})();