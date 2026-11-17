QONYS Apartment Renting Website

Project Topic

Apartment renting in Almaty and Astana.

Group Members

Temirlan Bolat
Kairatuly Miras
Akshit Khokher

Project Overview

QONYS is a student apartment renting website developed using HTML, CSS, JavaScript, Bootstrap and jQuery.

The website helps visitors explore sample apartments, compare rental prices, prepare a viewing shortlist and check the weather before planning an apartment visit.

The final project continues the original Endterm topic and website structure. It adds persistent theme selection, demo sign-in and sign-out, an animated FAQ and integration with a public weather API.

Project Objectives

Present apartment information in a clear and organised way.

Help visitors compare locations, room counts, apartment areas, monthly rents and deposits.

Provide interactive features using JavaScript and jQuery.

Demonstrate browser storage through persistent theme selection and login state.

Retrieve real information from a public API and display it dynamically.

Maintain a consistent design across five connected pages.

Support desktop, tablet and mobile devices.

Website Structure

Home

The Home page introduces QONYS and the apartment renting topic.

It contains the main introduction, navigation links, apartment selection steps, a featured apartment and frequently asked questions.

The FAQ contains five questions about rental costs, deposits, price comparisons, demonstration bookings and available cities.

Apartments

The Apartments page presents three sample properties.

Blue Horizon is a two-room apartment in Almaty.

Cozy Corner is a one-room apartment in Astana.

Sunlit Home is a three-room apartment in Almaty.

Each listing contains a photograph, location, description, room count, area and monthly rent.

The page also includes live search, city filters, a photo gallery and a three-day weather forecast.

Prices

The Prices page compares the apartments in a table.

The table includes apartment names, cities, room counts, areas, monthly rents and deposits.

Additional sections explain costs that may be separate from rent and show a first-month budget example.

The viewing shortlist allows visitors to create and manage their own list of apartments to visit.

About Us

The About Us page explains the project idea, its values and the purpose of the website.

It describes factors visitors should consider when choosing an apartment, including location, available space and total cost.

Contact

The Contact page contains example contact information and three demonstration form features.

The enquiry form allows visitors to select an apartment and practise entering their contact details.

The registration form demonstrates JavaScript validation and password strength feedback.

The sign-in form demonstrates persistent browser-local login state.

Navigation

All five pages contain a shared navigation bar.

Visitors can access Home, Apartments, Prices, About Us and Contact from every main page.

The active page is visually highlighted.

The logo links back to the Home page.

Implemented Features

Light and Dark Theme

A theme button is available in the header of every page.

Visitors can switch between light and dark appearances.

The selected value is saved in localStorage using the qonys-theme key.

The saved theme is applied when another page is opened or the current page is refreshed.

The theme script updates a data-theme attribute on the HTML element. CSS selectors use this attribute to apply the appropriate colours.

The script also responds to storage changes made in another browser tab.

If browser storage is unavailable, visitors can still change the appearance of the current page and receive a message explaining that the preference could not be saved.

Demo Sign-in

The sign-in form accepts a practice display name and an example email address.

The display name must contain between two and forty characters after surrounding spaces are removed.

The email must match the expected email format.

Empty fields, names containing only spaces and invalid email addresses are rejected.

Validation messages appear beside the relevant fields. An invalid submission moves focus to the first field that needs correction.

After successful validation, the form is hidden and a welcome panel is displayed.

Persistent Login State

The demo sign-in stores the practice display name and signed-in status in localStorage using the qonys-session key.

JSON.stringify converts the session object into a string for storage.

JSON.parse reads the saved information when the page loads.

The email address and passwords are not stored by the sign-in feature.

Refreshing the page or returning to the Contact page restores the welcome panel when a valid saved session exists.

Invalid saved data is treated as a signed-out state.

Sign-out

The sign-out button removes the saved session from localStorage.

The welcome panel is hidden and the sign-in form becomes available again.

Only the login entry is removed. The selected theme remains saved.

The sign-in feature is an educational demonstration of browser-local state. It does not authenticate users through a server or create real accounts.

Animated FAQ

The Home page contains five questions related to the apartment renting topic.

jQuery prepares the interactive FAQ and uses slideToggle to open and close answers.

A plus indicator represents a closed answer. A minus indicator represents an open answer.

The buttons update aria-expanded to describe their current state.

Keyboard users can reach the questions with Tab and activate them with Enter or Space.

The code finishes an existing animation before starting another toggle to prevent a long animation queue after repeated clicks.

The animation respects the reduced-motion preference.

If jQuery is unavailable, the original HTML details elements remain usable.

Weather API Integration

The Apartments page uses the Open-Meteo public weather API.

Visitors can select Almaty or Astana and view a forecast for the next three days.

The weather section supports planning an apartment viewing by showing the expected conditions in the selected city.

The request uses the selected city's latitude and longitude.

JavaScript fetch sends the request and response.json processes the returned JSON data.

The page dynamically creates forecast cards containing the date, minimum temperature, maximum temperature, weather description and precipitation probability.

Forecast dates use the requested local timezone.

API Interaction and Error Handling

The forecast loads when the page opens.

Changing the selected city requests a new forecast.

The Refresh forecast button allows visitors to request updated data manually.

A loading message appears while a request is being processed.

The refresh button is temporarily disabled during loading.

The code checks the HTTP response status and validates the expected JSON fields before displaying the forecast.

AbortController cancels an earlier request when another city is selected.

A request counter prevents an outdated response from replacing the latest selection.

Requests are cancelled after twelve seconds if they have not completed.

Network failures, incomplete responses and timeouts produce a readable message with an option to retry.

Weather data is not replaced with invented values when the service is unavailable.

Apartment Search and City Filters

Visitors can search apartments by name, city or district.

The search ignores letter case and removes surrounding spaces from the entered text.

City buttons filter the listings to Almaty, Astana or all available apartments.

Search and city filters work together.

The page displays the number of matching apartments and provides feedback when no results are found.

Photo Gallery

Apartment photographs can be opened in a lightbox.

Previous and next controls allow visitors to move between the available images.

Keyboard arrow keys also change the selected image.

The Escape key and the close button dismiss the lightbox.

jQuery fade effects are used when opening, closing and changing gallery images.

Viewing Shortlist

The Prices page contains an editable viewing shortlist.

Visitors can add an apartment name, city and monthly rent.

Existing rows can be edited and saved. Changes can also be cancelled.

Deleting an entry requires confirmation.

JavaScript updates the table without reloading the page.

The shortlist is stored in memory and resets when the page is refreshed. It is separate from the persistent theme and login state.

Registration Validation

The practice registration form checks the name, email, message, password and password confirmation.

Required fields cannot contain only spaces.

The email must follow the expected format.

A medium password requires at least eight characters with a letter and a number.

A strong password requires at least ten characters with lowercase letters, uppercase letters and numbers.

Password confirmation must match the original password.

The strength indicator updates while the visitor types.

A successful validation displays feedback and resets the form.

No account is created and no password is saved by this form.

Design and Layout

The website uses a consistent navy, warm brown and cream colour palette.

The shared layout includes a header, navigation bar, main content and footer.

Typography, spacing, buttons, cards and form controls follow a common visual style.

External CSS files separate presentation from page content.

Flexbox arranges navigation, controls and button groups.

CSS Grid arranges apartment cards and other page sections.

Bootstrap provides responsive columns, spacing utilities and form styling.

The weather section uses a sky-inspired background with separate light and dark appearances.

Responsive Behaviour

Media queries adapt the website for desktop, tablet and mobile screens.

Navigation can move onto a separate row on tablet-sized screens.

Content sections and apartment cards stack on smaller screens.

Form buttons become easier to use on mobile devices.

Long display names can wrap instead of extending outside their container.

Wide tables scroll within their own containers.

Accessibility

The pages use semantic HTML elements, including header, nav, main, section, article and footer.

Images include alternative text.

Form labels are connected to their controls.

Validation feedback identifies invalid fields.

Status messages announce changes such as sign-in results and API loading states.

Interactive controls support keyboard navigation.

The gallery and FAQ include keyboard interaction.

The design retains visible keyboard focus and respects reduced-motion settings.

Technologies Used

HTML5
CSS3
Bootstrap 5.3.3
JavaScript
jQuery 3.7.1
localStorage
Fetch API
JSON
Open-Meteo API
Google Fonts

Main HTML Files

index.html contains the Home page.

apartments.html contains apartment listings, search, city filters, the gallery and weather section.

prices.html contains rental comparisons, the budget example and viewing shortlist.

about.html contains information about the project.

contact.html contains enquiry, registration and sign-in forms.

CSS Files

css/style.css contains the shared design and responsive layouts.

css/gallery.css contains gallery and lightbox styles.

css/theme.css contains dark theme styles and theme control styling.

css/faq.css contains the animated FAQ styles.

css/weather.css contains weather controls, forecast cards and sky backgrounds.

JavaScript Files

js/script.js handles registration validation and password strength.

js/apartments.js handles live search, city filters and the gallery.

js/prices.js handles shortlist creation, editing and deletion.

js/auth.js handles sign-in validation, persistent login state and sign-out.

js/theme.js handles theme switching and persistence.

js/faq.js handles FAQ animation and expansion indicators.

js/weather.js handles API requests, response validation and forecast rendering.

Other Project Files

hs1.jpg, hs2.jpg and hs3.jpg contain the local apartment photographs.

README.md contains project documentation.

Development Process

The final project builds on the existing Endterm website.

The original five-page structure, apartment topic and core content were retained.

New functionality was introduced in separate stages so that each feature could be integrated and checked before the next stage.

The work was divided into sign-in, theme selection, FAQ animation, API integration, responsive improvements and documentation.

Git commits record the changes made during development.

Individual Contributions

Temirlan Bolat was responsible for the sign-in form structure, input validation, persistent login state and sign-out functionality.

He was also responsible for the weather API section, forecast requests, JSON processing, dynamic rendering, city selection, refresh controls and error handling.

Kairatuly Miras was responsible for dark theme styles, the theme button and saving the selected theme across pages.

He also worked on responsive layout improvements and the order of shared stylesheets.

Akshit Khokher was responsible for expanding the FAQ to five questions and implementing its jQuery animation and expansion indicators.

He also prepared the project documentation.

How to Run

Open the project folder in Visual Studio Code.

Start index.html using Live Server.

Keep the existing folder structure and file names unchanged.

Use the navigation bar to access the other pages.

An internet connection is required for the weather API and externally loaded Bootstrap, jQuery, Google Fonts and About page photographs.

Use the same local server address when checking persistent state because localStorage is associated with the website origin.

Verification Guide

Open every page and check the navigation links.

Switch themes, refresh the page and navigate between pages.

Try empty and invalid sign-in values before entering valid practice details.

Refresh after signing in, then sign out and refresh again.

Open and close all five FAQ answers.

Search apartments and combine the search with city filters.

Open the gallery and test its buttons and keyboard controls.

Add, edit, cancel and delete shortlist entries.

Select both weather cities and refresh the forecast.

Test the API error message with the network unavailable, then restore the connection and retry.

Check the layout at mobile, tablet and desktop widths.

Repeat the feature checks on the published GitHub Pages website.

Project Links

Website
https://temirlan-fr.github.io/midterm-apartment-renting/

GitHub Repository
https://github.com/temirlan-fr/midterm-apartment-renting

API Documentation
https://open-meteo.com/en/docs

Credits

Weather data is provided by Open-Meteo under the Creative Commons Attribution 4.0 license.

The original project photo credits include Clay Banks on Unsplash, Curtis Adams on Pexels and Furkan Tumer on Pexels.

Bootstrap, jQuery and Google Fonts are used in the website.

AI Acknowledgement

OpenAI ChatGPT and Codex assisted with requirements analysis, design improvements, code suggestions and explanations.

Project Limitations

Apartment names, prices and contact details are examples for a student project.

Photographs illustrate interiors and do not represent verified rental properties.

The website does not create real accounts, send enquiries, process payments or make bookings.

The sign-in state is stored locally in the browser and is not secure server-side authentication.

The viewing shortlist is not saved after a page refresh.

Weather forecasts depend on an external service and may change or become temporarily unavailable.

Clearing browser storage removes the saved theme and demo login state.
