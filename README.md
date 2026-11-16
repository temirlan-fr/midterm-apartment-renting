QONYS Apartment Renting Website

Project Topic

Apartment renting in Almaty and Astana.

Group Members

Temirlan Bolat
Kairatuly Miras
Akshit Khokher

Project Description

QONYS is a student website for exploring sample apartments, comparing rental prices and planning apartment viewings. The final project extends the Endterm website with persistent theme selection, demo sign-in, an animated FAQ and a public weather API.

Website Pages

Home introduces the website and contains a featured apartment, apartment selection steps and five frequently asked questions.

Apartments displays sample apartments with photos, locations, room counts, areas and monthly rents. Visitors can search by name or location, filter by city, open the photo gallery and check the weather before an apartment viewing.

Prices contains a rental comparison table, a first-month budget example and an editable viewing shortlist.

About Us explains the project idea and apartment selection considerations.

Contact contains contact information, a demonstration enquiry form, registration validation and demo sign-in.

Implemented Features

Light and Dark Theme

Visitors can switch between light and dark themes on every page. The selected theme is stored in localStorage and remains active after refreshing the page or navigating to another page.

Demo Sign-in and Sign-out

The sign-in form validates the display name and email format. Only the practice display name and login status are stored in localStorage. The email is not saved.

Signed-in visitors see a welcome message and a sign-out button. The login state remains active after refreshing. Signing out removes the saved login state without removing the selected theme.

This feature demonstrates browser-local login state. It does not authenticate a real account.

Animated FAQ

The Home page contains five questions related to apartment renting. jQuery slideToggle opens and closes the answers with a sliding animation. Plus and minus indicators show whether each answer is open or closed.

Weather API

The Apartments page uses the Open-Meteo API to display a three-day weather forecast for Almaty or Astana.

JavaScript fetch retrieves JSON data and creates forecast cards containing dates, minimum and maximum temperatures, weather descriptions and precipitation probability.

Visitors can select a city and refresh the forecast. Loading messages, request timeouts and error handling provide feedback when data cannot be loaded.

Apartment Search and Gallery

Live search matches apartment names and locations without depending on letter case. Search and city filters work together.

The photo gallery includes previous, next and close controls. Keyboard arrows change photos and Escape closes the lightbox.

Viewing Shortlist

Visitors can add apartments, edit entries, cancel edits and delete entries after confirmation. The table updates without reloading the page.

The shortlist is stored in memory and resets when the page reloads.

Registration Validation

The practice registration form checks required fields, email format, password strength and password confirmation. Feedback appears beside the fields. No account is created and no password is saved.

Design and Responsiveness

All five pages share a consistent navy, brown and cream design with common navigation and footer elements.

External CSS files provide styling. Flexbox, CSS Grid, Bootstrap and media queries support desktop, tablet and mobile layouts.

Technologies Used

HTML5
CSS3
Bootstrap 5.3.3
JavaScript
jQuery 3.7.1
localStorage
Fetch API
Open-Meteo API
Google Fonts

Main Files

index.html contains the Home page.
apartments.html contains apartment listings, the gallery and weather section.
prices.html contains rental prices and the viewing shortlist.
about.html contains information about the project.
contact.html contains enquiry, registration and sign-in forms.

css/style.css contains shared styles and responsive layouts.
css/gallery.css contains gallery and lightbox styles.
css/theme.css contains dark theme styles.
css/faq.css contains animated FAQ styles.
css/weather.css contains weather section styles.

js/script.js handles registration validation.
js/apartments.js handles apartment search, city filters and the gallery.
js/prices.js handles the viewing shortlist.
js/auth.js handles demo sign-in and sign-out.
js/theme.js handles theme selection and persistence.
js/faq.js handles the animated FAQ.
js/weather.js handles weather API requests and forecast rendering.

Individual Contributions

Temirlan Bolat was responsible for the sign-in form, input validation, persistent login state, sign-out and weather API integration.

Kairatuly Miras was responsible for dark theme styles, theme switching, theme persistence, responsive improvements and stylesheet order.

Akshit Khokher was responsible for the five-question FAQ, jQuery animations, expansion indicators and project documentation.

How to Run

Open the project folder in Visual Studio Code and start index.html using Live Server.

Keep the existing folder structure unchanged. Internet access is required for the weather API and externally loaded libraries, fonts and photos.

Project Links

Website
https://temirlan-fr.github.io/midterm-apartment-renting/

GitHub Repository
https://github.com/temirlan-fr/midterm-apartment-renting

API Documentation

https://open-meteo.com/en/docs

Credits

Weather data is provided by Open-Meteo under the Creative Commons Attribution 4.0 license.

Bootstrap, jQuery and Google Fonts are used in the website.

AI Acknowledgement

OpenAI ChatGPT and Codex assisted with requirements analysis, design improvements, code suggestions and explanations.

Project Limitations

Apartment listings, prices and contact details are examples for a student project. Photos illustrate interiors and do not represent verified rental properties.

The website does not create real accounts, send enquiries or make bookings. Weather forecasts depend on an external service and may change.



Project Screenshots

<img width="1448" height="923" alt="image" src="https://github.com/user-attachments/assets/76ccc59a-1e8c-4ed3-acce-53ddc446930e" />

<img width="970" height="888" alt="image" src="https://github.com/user-attachments/assets/e71661d8-00a0-426c-9ebe-3494d9b613bc" />

<img width="1406" height="751" alt="image" src="https://github.com/user-attachments/assets/1b43ba39-5102-4179-8fb3-9cbc80943946" />

<img width="1337" height="884" alt="image" src="https://github.com/user-attachments/assets/c90cf212-74e2-4c09-89d9-60021146260a" />

<img width="1407" height="396" alt="image" src="https://github.com/user-attachments/assets/3ed8b24b-4cb0-48b8-9339-ecf6f937f240" />

<img width="1386" height="640" alt="image" src="https://github.com/user-attachments/assets/76cd1f4d-960c-4bf4-b30d-faee46c4f643" />
