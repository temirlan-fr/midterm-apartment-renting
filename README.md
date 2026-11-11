# QONYS Apartment Renting Website

QONYS is a responsive student website for exploring sample rental apartments in Almaty and Astana. It has five pages: Home, Apartments, Prices, About Us and Contact.

## Group members and individual contributions

| Group member | Contribution |
| --- | --- |
| Temirlan Bolat | Built the Home, Apartments and Prices pages and added the original apartment search and city filters. |
| Kairatuly Miras | Created the original shared CSS and responsive layouts. |
| Akshit Khokher | Built the About Us and Contact pages and added the renter registration form. |

## Endterm features

- **Apartments** has a live, case-insensitive search for apartment names, cities and districts. The All, Almaty and Astana buttons work together with the search.
- **Apartments** also serves as a responsive photo gallery. Click a photo to enlarge it. Use the previous and next buttons or the keyboard arrow keys to move through the visible listings. Use Close or Escape to exit. The lightbox fades in and out with jQuery.
- **Prices** renders sample price records dynamically. Use the form to add a record, the Edit button to update it, and Delete to remove it after confirming. Changes are saved in the current browser using local storage.
- **Contact** keeps the original enquiry form and adds a practice renter registration form. Registration checks required fields, uses a regular expression to check email, shows weak, medium and strong password levels, and checks that both passwords match. Feedback appears as you type. Invalid entries block submission. A valid submission displays a success message on the page.

## Technologies

- HTML5 and CSS3 provide the page structure and custom responsive styles.
- Bootstrap 5.3.3 provides the grid, form styles, buttons and alerts. The stylesheet is included locally.
- JavaScript in `js/script.js` handles form validation, search, filters and the price table.
- jQuery 3.7.1 in `js/jquery.min.js` provides the gallery fade effects.

## Run the project

Open `index.html` in a browser or run the folder with VS Code Live Server. To demonstrate the endterm features, open Apartments, Prices and Contact. Use a sample password for registration. The website uses demo listings and performs these interactions in the browser.

## Project links

- [Published website](https://temirlan-fr.github.io/midterm-apartment-renting/)
- [Existing GitHub repository](https://github.com/temirlan-fr/midterm-apartment-renting)

## Content and image credits

The apartment names, rents and contact details are examples. The photos illustrate interiors. The midterm template credits Clay Banks on Unsplash, Curtis Adams on Pexels and Furkan Tumer on Pexels.
